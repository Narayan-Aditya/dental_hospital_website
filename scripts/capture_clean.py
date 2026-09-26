import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        b = await p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        context = b.contexts[0]
        os.makedirs("scripts/hope_fms_verification", exist_ok=True)
        
        page = await context.new_page()
        try:
            await page.goto("http://localhost:5173/", timeout=15000)
            await asyncio.sleep(2)
            
            # 1. Hero
            await page.evaluate("window.scrollTo(0, 0)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/01_hero_and_cards.png")
            print("Captured 01_hero_and_cards.png")

            # 2. Landmark Facility
            await page.evaluate("window.scrollTo(0, 750)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/02_landmark_facility.png")
            print("Captured 02_landmark_facility.png")

            # 3. Experience & Senior Dentists
            await page.evaluate("window.scrollTo(0, 1600)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/03_senior_dentists.png")
            print("Captured 03_senior_dentists.png")

            # 4. Five Verticals
            await page.evaluate("window.scrollTo(0, 2600)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/04_five_verticals.png")
            print("Captured 04_five_verticals.png")

            # 5. Specialties Grid
            await page.evaluate("window.scrollTo(0, 3600)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/05_specialties_grid.png")
            print("Captured 05_specialties_grid.png")

            # 6. Bottom Footer
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await asyncio.sleep(1)
            await page.screenshot(path="scripts/hope_fms_verification/06_footer_and_blogs.png")
            print("Captured 06_footer_and_blogs.png")
        finally:
            await page.close()

asyncio.run(run())
