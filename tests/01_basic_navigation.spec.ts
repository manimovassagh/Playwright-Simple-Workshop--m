import { test, expect } from '@playwright/test';

test('basic navigation & assertions', async ({ page }) => {
  await page.setContent(`
    <h1>Welcome</h1>
    <a id="more" href="https://example.com">More info</a>
  `);

  await expect(page).toHaveTitle('');
  await expect(page.locator('h1')).toHaveText('Welcome');

  await page.getByRole('link', { name: /more info/i }).click();
  console.log('Current URL after click:', page.url());
  await expect(page).toHaveURL(/example\.com/);

  await page.screenshot({ path: 'screenshots/01_basic.png', fullPage: true });
});