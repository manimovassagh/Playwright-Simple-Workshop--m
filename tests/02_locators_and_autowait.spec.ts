// Test smart locators and Playwright's auto-wait feature.
import { test, expect } from '@playwright/test';

/**
 * Smart locators + auto-wait:
 * - getByRole / getByLabel / getByPlaceholder / getByTestId
 * - Playwright auto-waits for elements to be ready (no sleeps needed)
 */
test('smart locators and auto-wait', async ({ page }) => {
  await page.setContent(`
    <form>
      <label for="email">Email</label>
      <input id="email" placeholder="you@example.com" />
      <button data-testid="submitBtn">Submit</button>
    </form>
  `);

  await page.getByLabel('Email').fill('tester@example.com');

  const button = page.getByTestId('submitBtn');
    const buttonCount = await page.locator('[data-testid="submitBtn"]').count();
    console.log('Number of submitBtn buttons found:', buttonCount);
  await expect(button).toBeVisible();
  await button.click();

  await expect(page).toHaveURL(/about:blank/); // no navigation here; just a demo
});