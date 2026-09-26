import asyncio
import base64
import os
import re
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]
        page = await context.new_page()
        await page.goto('https://www.google.com/search?kgmid=/g/11rpmyhmll&q=Hope+Dental+Hospital', timeout=30000)
        await asyncio.sleep(4)
        
        os.makedirs('public/images/hope', exist_ok=True)
        imgs = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(i => ({
                src: i.src,
                alt: i.alt || '',
                w: i.naturalWidth,
                h: i.naturalHeight
            })).filter(i => i.src && i.src.startsWith('data:image/'));
        }''')
        
        print(f"Total base64 images found: {len(imgs)}")
        idx = 0
        for img in imgs:
            if img['w'] > 60 and img['h'] > 60:
                header, data = img['src'].split(',', 1)
                ext = 'png' if 'png' in header else 'jpg'
                safe_alt = re.sub(r'[^a-zA-Z0-9]', '_', img['alt'])[:25]
                filename = f"public/images/hope/real_clinic_{idx}_{safe_alt}.{ext}"
                try:
                    with open(filename, 'wb') as f:
                        f.write(base64.b64decode(data))
                    print(f"Saved {filename} - {img['w']}x{img['h']} - {img['alt']}")
                    idx += 1
                except Exception as e:
                    print(f"Error saving {idx}: {e}")

if __name__ == '__main__':
    asyncio.run(run())
