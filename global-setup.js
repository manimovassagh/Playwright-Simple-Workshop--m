const { chromium } = require('@playwright/test');
const fs = require('fs');

module.exports = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent(`<script>localStorage.setItem('auth','1')</script>`);
  await context.storageState({ path: './auth-state.json' });
  await browser.close();
};
