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
    await page.setContent(`<script>localStorage.setItem('auth','1')</script>`);
    await ctx.storageState({ path: 'auth-state.json' });
    await ctx.close();
  });

  test.use({ storageState: 'auth-state.json' });

  test('user is considered logged in', async ({ page }) => {
    await page.setContent(`
      <div id="status"></div>
      <script>
        document.getElementById('status').textContent = localStorage.getItem('auth') ? 'LOGGED-IN' : 'GUEST';
      </script>
    `);
    await expect(page.locator('#status')).toHaveText('LOGGED-IN');
  });
});