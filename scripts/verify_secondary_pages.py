import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]
        page = await context.new_page()
        await page.goto('http://localhost:5173/', wait_until='domcontentloaded')
        await page.wait_for_timeout(1000)
        
        # Click on About Us
        await page.click('header button:has-text("About Us")')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='scripts/hope_fms_verification/about_screen.png')
        print('About page captured')

        # Click on Specialties
        await page.click('header button:has-text("Specialties")')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='scripts/hope_fms_verification/services_screen.png')
        print('Services page captured')

        await page.close()

if __name__ == '__main__':
    asyncio.run(verify())
