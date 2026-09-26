import asyncio
import os
import urllib.request
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]
        
        # 1. YouTube page
        page = await context.new_page()
        await page.goto('https://youtube.com/@drhimangidubey_hopedental', timeout=30000)
        await asyncio.sleep(3)
        yt_imgs = await page.evaluate('''() => {
            const avatar = document.querySelector('#avatar img, yt-img-shadow#avatar img, .channel-header img');
            const banner = document.querySelector('#header img, yt-image-banner-view-model img');
            return {
                avatar: avatar ? avatar.src : null,
                banner: banner ? banner.src : null
            };
        }''')
        print('YouTube images:', yt_imgs)
        
        os.makedirs('public/images/hope', exist_ok=True)
        if yt_imgs.get('avatar'):
            try:
                urllib.request.urlretrieve(yt_imgs['avatar'], 'public/images/hope/dr_himangi_dubey_yt.jpg')
                print('Downloaded dr_himangi_dubey_yt.jpg')
            except Exception as e:
                print('Error downloading avatar:', e)

        # 2. Check Facebook
        fb_page = await context.new_page()
        await fb_page.goto('https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/', timeout=30000)
        await asyncio.sleep(3)
        fb_imgs = await fb_page.evaluate('''() => {
            return Array.from(document.querySelectorAll('image, img')).map(el => el.src || el.getAttribute('xlink:href')).filter(Boolean);
        }''')
        print(f'Facebook images found: {len(fb_imgs)}')
        for idx, src in enumerate(fb_imgs[:10]):
            if 'scontent' in src:
                try:
                    urllib.request.urlretrieve(src, f'public/images/hope/fb_img_{idx}.jpg')
                    print(f'Downloaded fb_img_{idx}.jpg')
                except Exception as e:
                    pass

if __name__ == '__main__':
    asyncio.run(run())
