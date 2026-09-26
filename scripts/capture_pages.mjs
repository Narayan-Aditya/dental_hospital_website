import fs from 'fs';
import path from 'path';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const tabs = await fetch('http://localhost:9222/json/list').then(r => r.json());
  const tab = tabs.find(t => t.url && t.url.includes('5173'));
  if (!tab) {
    console.error('No tab found with 5173');
    process.exit(1);
  }

  const outDir = './scripts/verification';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const ws = new WebSocket(tab.webSocketDebuggerUrl);

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

  async function takeScreenshot(filename) {
    const res = await sendCommand('Page.captureScreenshot', { format: 'png' });
    if (res && res.data) {
      const buffer = Buffer.from(res.data, 'base64');
      fs.writeFileSync(path.join(outDir, filename), buffer);
      console.log(`Saved screenshot ${filename} (${buffer.length} bytes)`);
    }
  }

  async function evalCode(expr) {
    return await sendCommand('Runtime.evaluate', { expression: expr, awaitPromise: true });
  }

  console.log('Navigating to Home Page...');
  await evalCode(`window.location.hash = 'home'`);
  await wait(1500);
  await takeScreenshot('01_home_screen.png');

  console.log('Navigating to Clinics / Facilities...');
  await evalCode(`window.location.hash = 'clinics'`);
  await wait(1500);
  await takeScreenshot('02_clinics_screen.png');

  console.log('Navigating to Contact...');
  await evalCode(`window.location.hash = 'contact'`);
  await wait(1500);
  await takeScreenshot('03_contact_screen.png');

  console.log('Navigating to Reviews...');
  await evalCode(`window.location.hash = 'reviews'`);
  await wait(1500);
  await takeScreenshot('04_reviews_screen.png');

  console.log('Navigating to About...');
  await evalCode(`window.location.hash = 'about'`);
  await wait(1500);
  await takeScreenshot('05_about_screen.png');

  console.log('All screenshots captured successfully!');
  ws.close();
  process.exit(0);
}

run().catch(console.error);
