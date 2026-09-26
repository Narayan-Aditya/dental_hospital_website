import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        context = browser.contexts[0]
        fms_page = [pg for pg in context.pages if "fmsdental.com" in pg.url][0]

        # Scroll to bottom
        await fms_page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(2)
        await fms_page.screenshot(path="scripts/fms_sections/actual_footer.png")
        print("Captured actual_footer.png")

        # Extract footer HTML & styles
        footer_data = await fms_page.evaluate("""() => {
            const footer = document.querySelector('footer');
            return {
                html: footer ? footer.outerHTML.slice(0, 5000) : '',
                text: footer ? footer.innerText : ''
            };
        }""")
        
        with open("scripts/fms_footer.txt", "w", encoding="utf-8") as f:
            f.write(footer_data['text'])
        print("Saved footer text to scripts/fms_footer.txt")

if __name__ == "__main__":
    asyncio.run(main())
