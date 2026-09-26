import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        b = await p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        context = b.contexts[0]
        
        # Look for localhost:5173 page
        page = None
        for pg in context.pages:
            if "localhost:5173" in pg.url or "127.0.0.1:5173" in pg.url:
                page = pg
                break
                
        if not page:
            print("Opening localhost:5173...")
            page = await context.new_page()
            await page.goto("http://localhost:5173/#home", wait_until="domcontentloaded")
        else:
            print(f"Navigating page: {page.url}")
            await page.goto("http://localhost:5173/#home", wait_until="domcontentloaded")

        os.makedirs("scripts/hope_fms_verification", exist_ok=True)
        await asyncio.sleep(3)

        # 1. Top bar, Header & Hero
        await page.evaluate("window.scrollTo(0, 0)")
        await asyncio.sleep(1.5)
        await page.screenshot(path="scripts/hope_fms_verification/01_hero_and_cards.png")
        print("Captured 01_hero_and_cards.png")

        # 2. Landmark Facility Section
        await page.evaluate("window.scrollTo(0, 800)")
        await asyncio.sleep(1.5)
        await page.screenshot(path="scripts/hope_fms_verification/02_landmark_facility.png")
        print("Captured 02_landmark_facility.png")

        # 3. Experience & Senior Dentists
        await page.evaluate("window.scrollTo(0, 1650)")
        await asyncio.sleep(1.5)
        await page.screenshot(path="scripts/hope_fms_verification/03_senior_dentists.png")
        print("Captured 03_senior_dentists.png")

        # 4. Five Verticals
        await page.evaluate("window.scrollTo(0, 2750)")
        await asyncio.sleep(1.5)
        await page.screenshot(path="scripts/hope_fms_verification/04_five_verticals.png")
        print("Captured 04_five_verticals.png")

        # 5. Specialties Grid
        await page.evaluate("window.scrollTo(0, 3700)")
        await asyncio.sleep(1.5)
        await page.screenshot(path="scripts/hope_fms_verification/05_specialties_grid.png")
        print("Captured 05_specialties_grid.png")

        # 6. Footer and Pre-Footer
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(2)
        await page.screenshot(path="scripts/hope_fms_verification/06_footer_and_blogs.png")
        print("Captured 06_footer_and_blogs.png")

asyncio.run(run())
