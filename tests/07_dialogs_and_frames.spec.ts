import { test, expect } from '@playwright/test';

/**
 * Dialogs (alert/confirm/prompt) and iframes
 */
test('handle dialogs and interact with iframe', async ({ page }) => {
  await page.setContent(`
    <button id="alert">Alert</button>
    <iframe id="f" srcdoc="<input id='inner' value='hi' />"></iframe>
    <script>
      document.getElementById('alert').onclick = () => alert('Hello!');
    </script>
  `);

  page.once('dialog', async d => {
    expect(d.message()).toBe('Hello!');
    await d.accept();
  });
  await page.click('#alert');

  const input = page.frameLocator('#f').locator('#inner');
  await expect(input).toHaveValue('hi');
  await input.fill('from parent');
  await expect(input).toHaveValue('from parent');
});