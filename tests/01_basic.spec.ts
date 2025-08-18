import { test, expect } from '@playwright/test';

test('basic navigation & assertions', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/i);

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('Example Domain');

  await page.getByRole('link', { name: /more information/i }).click();
  await expect(page).toHaveURL(/iana\.org/);

  await page.screenshot({ path: 'screenshots/basic.png', fullPage: true });
});