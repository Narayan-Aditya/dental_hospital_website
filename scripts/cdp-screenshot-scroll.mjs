import fs from 'fs';

async function capture() {
  const tabs = await fetch('http://localhost:9222/json/list').then(r => r.json());
  const tab = tabs.find(t => t.url && t.url.includes('5173'));
  if (!tab) {
    console.error('No tab found with 5173');
    process.exit(1);
  }

  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  ws.onopen = () => {
    // Scroll window down by 1400px to see curved hero & doctors
    ws.send(JSON.stringify({
      id: 1,
      method: 'Runtime.evaluate',
      params: {
        expression: 'window.scrollTo(0, 1400); document.documentElement.scrollTop = 1400;'
      }
    }));
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id === 1) {
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 500);
    } else if (data.id === 2 && data.result && data.result.data) {
      const buffer = Buffer.from(data.result.data, 'base64');
      fs.writeFileSync('scripts/hope_dental_doctors_screenshot.png', buffer);
      console.log('Saved to scripts/hope_dental_doctors_screenshot.png');
      ws.close();
      process.exit(0);
    }
  };
}

capture();
