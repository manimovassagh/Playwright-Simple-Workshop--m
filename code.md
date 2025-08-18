# Basic Functionality of Playwright

```ts
import { test, expect } from '@playwright/test';

test('basic example', async ({ page }) => {
  // 🌐 Launch browser & go to page
  await page.goto('https://example.com');

  // 🎯 Locate element & assert text
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // 🖱️ Simulate user action
  await page.click('a'); // clicks "More information"

  // 📷 Take screenshot
  await page.screenshot({ path: 'screenshot.png' });

  // 📡 Intercept network request (mock API)
  await page.route('**/api/data', route =>
    route.fulfill({ json: { mocked: true } })
  );
});
