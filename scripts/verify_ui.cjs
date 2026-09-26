const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function verify() {
  try {
    const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
    const contexts = browser.contexts();
    const context = contexts[0] || await browser.newContext();
    const page = await context.newPage();

    console.log('Navigating to http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 15000 });
    await page.waitForTimeout(2000);

    const outDir = path.join(__dirname, 'verification');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    await page.screenshot({ path: path.join(outDir, '01_home.png'), fullPage: false });
    console.log('Home screenshot taken');

    // Check title and some text
    const title = await page.title();
    console.log('Page Title:', title);

    // Navigate to clinics
    await page.click('button:has-text("Hospital & Facilities")');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(outDir, '02_facilities.png'), fullPage: false });
    console.log('Facilities screenshot taken');

    // Navigate to contact
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(outDir, '03_contact.png'), fullPage: false });
    console.log('Contact screenshot taken');

    // Navigate to reviews
    await page.click('button:has-text("Reviews")');
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(outDir, '04_reviews.png'), fullPage: false });
    console.log('Reviews screenshot taken');

    await page.close();
    console.log('Verification finished successfully!');
  } catch (err) {
    console.error('Error during verification:', err);
  }
}

verify();
