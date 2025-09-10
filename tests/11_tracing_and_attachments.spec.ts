// This test checks Playwright's tracing and attachment features
// This test demonstrates Playwright tracing and report attachments.
// Test tracing and adding attachments to Playwright reports.
import { test, expect } from '@playwright/test';

/**
 * Traces are configured in config (trace: 'on-first-retry', etc.)
 * Here we also attach artifacts to the HTML report.
 */
test('add attachments to report', async ({ page }, testInfo) => {
  await page.setContent(`<h1>Trace & Report Demo</h1>`);
  const shot = await page.screenshot();
  await testInfo.attach('page-screenshot', { body: shot, contentType: 'image/png' });

  await expect(page.locator('h1')).toHaveText(/Trace/);
});