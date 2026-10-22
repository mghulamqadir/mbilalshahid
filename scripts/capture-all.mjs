import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/previews');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const routes = [
  { name: 'home', path: '/' },
  { name: 'results', path: '/results' },
  { name: 'case-study', path: '/results/contemporary-apparel-q4' },
  { name: 'services', path: '/services' },
  { name: 'process', path: '/process' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'resume', path: '/resume' },
];

async function main() {
  const browser = await chromium.launch();
  
  // Desktop
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  for (const r of routes) {
    console.log(`Navigating desktop: ${r.path}`);
    await desktopPage.goto(`http://localhost:3000${r.path}`, { waitUntil: 'networkidle' });
    await desktopPage.screenshot({
      path: path.join(outDir, `${r.name}-desktop.png`),
      fullPage: true,
    });
  }
  await desktopContext.close();

  // Mobile (iPhone 13 / 390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();

  for (const r of routes) {
    console.log(`Navigating mobile: ${r.path}`);
    await mobilePage.goto(`http://localhost:3000${r.path}`, { waitUntil: 'networkidle' });
    await mobilePage.screenshot({
      path: path.join(outDir, `${r.name}-mobile.png`),
      fullPage: false,
    });
  }
  await mobileContext.close();

  await browser.close();
  console.log('All screenshots captured successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
