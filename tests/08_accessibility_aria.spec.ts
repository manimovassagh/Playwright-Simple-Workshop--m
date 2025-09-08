// Test accessibility and ARIA role-based locators.
import { test, expect } from '@playwright/test';

/**
 * ARIA & role-based locators (great for accessibility and stability)
 */
test('role & ARIA based locators', async ({ page }) => {
  await page.setContent(`
    <main>
      <h1>Dashboard</h1>
      <button aria-label="Open settings">⚙️</button>
      <nav aria-label="Main">
        <a href="#home">Home</a>
        <a href="#users">Users</a>
      </nav>
    </main>
  `);

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Dashboard');
  await page.getByRole('button', { name: /open settings/i }).click();

  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();
});