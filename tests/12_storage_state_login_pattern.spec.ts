import { test, expect } from '@playwright/test';

/**
 * Common login pattern:
 * - do a "login once" in beforeAll
 * - re-use storage state in tests
 * (For demo, we simulate a login flag in localStorage.)
 */
test.describe('storage state pattern', () => {
  test.beforeAll(async ({ browser }) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
  await ctx.addCookies([{ name: 'auth', value: '1', domain: 'localhost', path: '/' }]);
  await ctx.storageState({ path: './auth-state.json' });
    await ctx.close();
  });

  test.use({ storageState: './auth-state.json' });

  test('user is considered logged in', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.context().addCookies([{ name: 'auth', value: '1', domain: 'playwright.dev', path: '/' }]);
  await page.reload();
  const isLoggedIn = await page.evaluate(() => document.cookie.includes('auth=1'));
  expect(isLoggedIn).toBe(true);
  });
});