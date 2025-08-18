import { test, expect } from '@playwright/test';

/**
 * Built-in assertions on state:
 * - visibility, enabled/disabled, checked
 * - text/content/attributes
 */
test('assert element states', async ({ page }) => {
  await page.setContent(`
    <button id="go" disabled>Go</button>
    <label><input id="chk" type="checkbox" /> Accept</label>
    <div id="msg" data-role="info">Hello</div>
    <script> setTimeout(() => document.getElementById('go').disabled = false, 300); </script>
  `);

  await expect(page.locator('#go')).toBeDisabled();
  await expect(page.locator('#go')).toBeVisible();
  await expect(page.locator('#msg')).toHaveAttribute('data-role', 'info');
  await expect(page.locator('#msg')).toContainText('Hello');

  await page.locator('#chk').check();
  await expect(page.locator('#chk')).toBeChecked();

  await expect(page.locator('#go')).toBeEnabled(); // auto-waits until it becomes enabled
});