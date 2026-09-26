import asyncio
import json
import os
from playwright.async_api import async_playwright

urls = {
    "google": "https://share.google/M13VNXGp52dAKKUWl",
    "justdial": "https://jsdl.in/DT-39XTVYSNSB8",
    "facebook": "https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/",
    "youtube": "https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp"
}

async def inspect_url(context, name, url):
    print(f"\n--- Visiting {name}: {url} ---")
    page = await context.new_page()
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=45000)
        await asyncio.sleep(4)  # Wait for dynamic JS content
        title = await page.title()
        current_url = page.url
        print(f"Title: {title}")
        print(f"Final URL: {current_url}")
        
        # Take a screenshot
        os.makedirs("scripts/evidence", exist_ok=True)
        screenshot_path = f"scripts/evidence/{name}.png"
        await page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")
        
        # Extract page text
        body_text = await page.evaluate("() => document.body.innerText")
        with open(f"scripts/evidence/{name}_text.txt", "w", encoding="utf-8") as f:
            f.write(body_text)
            
        print(f"Saved text snippet ({len(body_text)} chars)")
    except Exception as e:
        print(f"Error visiting {name}: {e}")
    finally:
        # Don't close immediately so user can see it in Brave, or keep it open if needed. We can keep it or close.
        pass

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        context = browser.contexts[0]
        for name, url in urls.items():
            await inspect_url(context, name, url)

if __name__ == "__main__":
    asyncio.run(main())
