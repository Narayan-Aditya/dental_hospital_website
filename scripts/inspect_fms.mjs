import fs from 'fs';

async function inspect() {
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

  // 1. Take a screenshot of FMS
  const screenshotRes = await sendCommand('Page.captureScreenshot', { format: 'png' });
  if (screenshotRes && screenshotRes.data) {
    fs.writeFileSync('scripts/fms_live_screenshot.png', Buffer.from(screenshotRes.data, 'base64'));
    console.log('Saved FMS live screenshot to scripts/fms_live_screenshot.png');
  }

  // 2. Extract Header, Nav, Body Sections, Footer details
  const uiStructure = await evalCode(`
    (() => {
      const getStyles = (el) => {
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          bg: cs.backgroundColor,
          color: cs.color,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          height: cs.height,
          padding: cs.padding,
          display: cs.display
        };
      };

      // Top bar info
      const topBar = document.querySelector('.top-bar, .header-top, #top-bar, [class*="top-header"], [class*="topbar"]') || document.querySelector('header')?.firstElementChild;
      
      // Main header & Nav
      const header = document.querySelector('header');
      const navLinks = Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
        text: a.textContent.trim().replace(/\\s+/g, ' '),
        href: a.getAttribute('href')
      })).filter(x => x.text && x.text.length < 50).slice(0, 30);

      // Section titles / IDs
      const sections = Array.from(document.querySelectorAll('section, main > div, .elementor-section')).map(s => {
        const h = s.querySelector('h1, h2, h3, h4')?.textContent?.trim()?.replace(/\\s+/g, ' ');
        const cls = s.className;
        return { tag: s.tagName, class: cls ? cls.slice(0, 100) : '', heading: h || '' };
      }).filter(s => s.heading || s.class).slice(0, 30);

      // Footer
      const footer = document.querySelector('footer');
      const footerLinks = Array.from(footer ? footer.querySelectorAll('a') : []).map(a => a.textContent.trim().replace(/\\s+/g, ' ')).filter(Boolean).slice(0, 30);

      // Primary colors used
      const colors = {
        primaryBtn: getStyles(document.querySelector('.btn-primary, button, .elementor-button, a[class*="btn"]')),
        bodyBg: getStyles(document.body).bg,
        headerBg: getStyles(header).bg,
        topBarStyles: getStyles(topBar),
        footerBg: getStyles(footer).bg
      };

      return {
        title: document.title,
        topBarStyles: colors.topBarStyles,
        headerStyles: colors.headerBg,
        primaryBtn: colors.primaryBtn,
        footerStyles: colors.footerBg,
        navLinks,
        sections,
        footerLinks
      };
    })()
  `);

  fs.writeFileSync('scripts/fms_ui_analysis.json', JSON.stringify(uiStructure, null, 2));
  console.log('UI analysis written to scripts/fms_ui_analysis.json');

  ws.close();
  process.exit(0);
}

inspect().catch(console.error);
