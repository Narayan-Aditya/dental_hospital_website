import fs from 'fs';
import path from 'path';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function inspectSections() {
  const tabs = await fetch('http://localhost:9222/json/list').then(r => r.json());
  const fmsTab = tabs.find(t => t.url && t.url.includes('fmsdental.com'));
  if (!fmsTab) {
    console.error('FMS tab not found');
    process.exit(1);
  }

  const ws = new WebSocket(fmsTab.webSocketDebuggerUrl);
  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve } = pending.get(data.id);
      pending.delete(data.id);
      resolve(data.result);
    }
  };

  await new Promise(r => { ws.onopen = r; });

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async function evalCode(expr) {
    const res = await sendCommand('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    return res && res.result ? res.result.value : null;
  }

  const outDir = 'scripts/fms_sections';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Scroll and capture screenshots of sections
  const scrolls = [
    { name: '01_hero', y: 0 },
    { name: '02_intro_awards', y: 700 },
    { name: '03_specialties', y: 1500 },
    { name: '04_facilities', y: 2400 },
    { name: '05_why_choose_us', y: 3300 },
    { name: '06_testimonials_video', y: 4200 },
    { name: '07_doctors_tourism', y: 5100 },
    { name: '08_footer', y: 6500 }
  ];

  for (const s of scrolls) {
    await evalCode(`window.scrollTo(0, ${s.y})`);
    await wait(800);
    const shot = await sendCommand('Page.captureScreenshot', { format: 'png' });
    if (shot && shot.data) {
      fs.writeFileSync(path.join(outDir, `${s.name}.png`), Buffer.from(shot.data, 'base64'));
      console.log(`Captured ${s.name}`);
    }
  }

  // Extract detailed structural elements
  const details = await evalCode(`
    (() => {
      const allSections = Array.from(document.querySelectorAll('section, div.elementor-section, footer')).map((sec, idx) => {
        const text = sec.innerText?.slice(0, 300)?.replace(/\\s+/g, ' ');
        const h2 = Array.from(sec.querySelectorAll('h1, h2, h3')).map(h => h.innerText.trim()).filter(Boolean);
        const images = Array.from(sec.querySelectorAll('img')).map(img => img.src).slice(0, 5);
        const bg = window.getComputedStyle(sec).backgroundColor;
        return {
          index: idx,
          tag: sec.tagName,
          id: sec.id,
          class: sec.className.slice(0, 100),
          headings: h2,
          snippet: text,
          bg
        };
      }).filter(s => s.headings.length > 0 || s.snippet.length > 30);

      // Footer structure
      const footerEl = document.querySelector('footer');
      const footerCols = Array.from(footerEl ? footerEl.querySelectorAll('.elementor-column, .footer-col, [class*="col-"]') : []).map(col => {
        const title = col.querySelector('h1, h2, h3, h4, h5, h6, strong')?.innerText?.trim();
        const links = Array.from(col.querySelectorAll('a')).map(a => a.innerText.trim()).filter(Boolean);
        return { title, links };
      });

      return { allSections, footerCols };
    })()
  `);

  fs.writeFileSync('scripts/fms_detailed_structure.json', JSON.stringify(details, null, 2));
  console.log('Saved detailed structure to scripts/fms_detailed_structure.json');

  ws.close();
  process.exit(0);
}

inspectSections().catch(console.error);
