// Test mobile emulation and responsive layout.
import { test, expect } from '@playwright/test';

/**
 * Per-test device emulation:
 * - emulate a mobile viewport & UA
 */
test.use({
  viewport: { width: 390, height: 844 }, // iPhone-ish
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
});

test('mobile-friendly layout check', async ({ page }) => {
  await page.setContent(`
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { margin:0; }
      header { padding:16px; background:#eee; }
      nav { display:flex; gap:12px; overflow:auto; }
      .card { margin:12px; padding:16px; border:1px solid #ccc; border-radius:12px; }
    </style>
    <header>My App</header>
    <nav>
      <a>Home</a><a>Search</a><a>Profile</a><a>Settings</a>
    </nav>
    <section class="card">Responsive card content</section>
  `);

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('.card')).toBeVisible();
});