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
    // Send Page.captureScreenshot
    ws.send(JSON.stringify({
      id: 1,
      method: 'Page.captureScreenshot',
      params: {
        format: 'png',
        captureBeyondViewport: false
      }
    }));
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id === 1 && data.result && data.result.data) {
      const buffer = Buffer.from(data.result.data, 'base64');
      fs.writeFileSync('scripts/hope_dental_screenshot.png', buffer);
      console.log('Screenshot saved to scripts/hope_dental_screenshot.png, size:', buffer.length);
      ws.close();
      process.exit(0);
    }
  };

  ws.onerror = (err) => {
    console.error('WS error:', err);
    process.exit(1);
  };
}

capture();
