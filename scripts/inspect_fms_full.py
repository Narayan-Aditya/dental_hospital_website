import asyncio
import json
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        context = browser.contexts[0]
        
        # Find fms page
        fms_page = None
        for page in context.pages:
            if "fmsdental.com" in page.url:
                fms_page = page
                break
        
        if not fms_page:
            print("Opening fmsdental.com in new page...")
            fms_page = await context.new_page()
            await fms_page.goto("https://www.fmsdental.com/", wait_until="networkidle", timeout=30000)
        else:
            print(f"Found open fms page: {fms_page.url}")

        os.makedirs("scripts/fms_sections", exist_ok=True)
        
        # Capture screenshots down the page
        scroll_steps = [
            ("01_header_hero", 0),
            ("02_intro_awards", 800),
            ("03_specialties_grid", 1600),
            ("04_facilities_showcase", 2500),
            ("05_why_choose_us", 3400),
            ("06_testimonials_video", 4300),
            ("07_international_doctors", 5200),
            ("08_branches_map", 6100),
            ("09_footer", 7200)
        ]

        for name, scroll_y in scroll_steps:
            await fms_page.evaluate(f"window.scrollTo(0, {scroll_y})")
            await asyncio.sleep(1)
            shot_path = f"scripts/fms_sections/{name}.png"
            await fms_page.screenshot(path=shot_path)
            print(f"Captured {shot_path}")

        # Extract navigation structure, colors, fonts, sections, and footer
        info = await fms_page.evaluate("""() => {
            const getStyle = (el, prop) => el ? window.getComputedStyle(el).getPropertyValue(prop) : '';
            
            // Top bar
            const topBarEl = document.querySelector('.top-header, .top-bar, #top-bar, .header-top') || document.querySelector('header > div:first-child');
            const topBar = {
                text: topBarEl ? topBarEl.innerText.replace(/\\s+/g, ' ') : '',
                bg: getStyle(topBarEl, 'background-color'),
                color: getStyle(topBarEl, 'color'),
                height: topBarEl ? topBarEl.offsetHeight : 0
            };

            // Main navigation
            const headerEl = document.querySelector('header');
            const navEl = document.querySelector('nav, .main-navigation, header .elementor-nav-menu');
            const navItems = Array.from(document.querySelectorAll('header nav li > a, header nav > ul > li > a')).map(a => ({
                text: a.innerText.trim(),
                href: a.getAttribute('href')
            })).filter(x => x.text);

            // Call to action button
            const bookBtn = document.querySelector('header a[href*="appointment"], .top-bar a[href*="appointment"], a.elementor-button');
            const btnStyle = {
                text: bookBtn ? bookBtn.innerText.trim() : '',
                bg: getStyle(bookBtn, 'background-color'),
                color: getStyle(bookBtn, 'color'),
                borderRadius: getStyle(bookBtn, 'border-radius'),
                padding: getStyle(bookBtn, 'padding'),
                fontSize: getStyle(bookBtn, 'font-size')
            };

            // Section headlines and text
            const sections = Array.from(document.querySelectorAll('section, div.elementor-section')).map(sec => {
                const headings = Array.from(sec.querySelectorAll('h1, h2, h3, h4')).map(h => h.innerText.trim()).filter(Boolean);
                const bg = getStyle(sec, 'background-color');
                const bgImg = getStyle(sec, 'background-image');
                return {
                    id: sec.id,
                    className: sec.className.slice(0, 80),
                    headings,
                    snippet: sec.innerText ? sec.innerText.slice(0, 150).replace(/\\s+/g, ' ') : '',
                    bg,
                    bgImg: bgImg && bgImg !== 'none' ? bgImg.slice(0, 100) : ''
                };
            }).filter(s => s.headings.length > 0);

            // Footer
            const footerEl = document.querySelector('footer');
            const footerText = footerEl ? footerEl.innerText.replace(/\\s+/g, ' ') : '';
            const footerBg = getStyle(footerEl, 'background-color');
            const footerHeadings = Array.from(footerEl ? footerEl.querySelectorAll('h1, h2, h3, h4, h5, h6, strong') : []).map(h => h.innerText.trim()).filter(Boolean);

            return {
                topBar,
                btnStyle,
                navItems,
                sections: sections.slice(0, 20),
                footerBg,
                footerHeadings,
                footerTextSnippet: footerText.slice(0, 500)
            };
        }""")

        with open("scripts/fms_full_info.json", "w", encoding="utf-8") as f:
            json.dump(info, f, indent=2)
            
        print("Analysis complete! Saved to scripts/fms_full_info.json")

if __name__ == "__main__":
    asyncio.run(main())
