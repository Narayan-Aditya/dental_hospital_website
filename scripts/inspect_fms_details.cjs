const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  try {
    const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
    const contexts = browser.contexts();
    const pages = contexts[0].pages();
    const fmsPage = pages.find(p => p.url().includes('fmsdental.com'));
    if (!fmsPage) {
      console.log('FMS page not found in open tabs. Pages:', pages.map(p => p.url()));
      return;
    }

    const details = await fmsPage.evaluate(() => {
      // 1. Top bar
      const topBarEl = document.querySelector('.fms-top-bar, .top-bar') || document.querySelector('div[style*="background: rgb(0, 0, 0)"]') || document.querySelector('header')?.previousElementSibling;
      
      // 2. Header
      const headerEl = document.querySelector('header');

      // 3. Hero section
      const heroEl = document.querySelector('.fms-hero-curved') || document.querySelector('section');

      // 4. Hero action cards
      const _heroCards = Array.from(document.querySelectorAll('.fms-hero-curved .fms-card, .fms-hero-curved a, .fms-hero-curved > div > div')).map(el => ({
        tagName: el.tagName,
        className: el.className,
        text: el.innerText.trim(),
        html: el.outerHTML.slice(0, 300)
      }));

      // Let's get outerHTML of hero section
      const heroHTML = heroEl ? heroEl.outerHTML : '';

      // Let's get outerHTML of topbar & header
      const topBarHTML = topBarEl ? topBarEl.outerHTML : '';
      const headerHTML = headerEl ? headerEl.outerHTML : '';

      // Landmark section
      const landmarkEl = document.querySelector('.fms-international-center-section');
      const landmarkHTML = landmarkEl ? landmarkEl.outerHTML : '';

      // Footer
      const footerEl = document.querySelector('footer');
      const footerHTML = footerEl ? footerEl.outerHTML : '';

      return {
        topBarHTML: topBarHTML.slice(0, 2000),
        headerHTML: headerHTML.slice(0, 3000),
        heroHTML: heroHTML.slice(0, 4000),
        landmarkHTML: landmarkHTML.slice(0, 4000),
        footerHTML: footerHTML.slice(0, 4000)
      };
    });

    fs.writeFileSync('scripts/fms_exact_html.json', JSON.stringify(details, null, 2));
    console.log('Successfully written scripts/fms_exact_html.json');
  } catch (err) {
    console.error('Error:', err);
  }
})();
