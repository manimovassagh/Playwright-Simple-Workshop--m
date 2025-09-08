// Test network interception and API response mocking.
import { test, expect } from '@playwright/test';

/**
 * Network interception & mocking:
 * - route() to fulfill a fake API response
 */
test('mock API responses', async ({ page }) => {
  await page.route('**/api/user*', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ id: 'u1', name: 'Mocked Mani' }),
    });
  });

  await page.setContent(`
    <div id="out">Loading...</div>
    <script>
      fetch('http://localhost/api/user').then(r=>r.json()).then(d=>{
        document.getElementById('out').textContent = d.name;
      });
    </script>
  `);

  await expect(page.locator('#out')).not.toHaveText('Loading...');
  await expect(page.locator('1c#out')).toHaveText('Mocked Mani');
});