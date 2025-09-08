// Test various user interactions: click, type, hover, drag & drop.
import { test, expect } from '@playwright/test';

/**
 * User-like actions:
 * - click, type, hover, keyboard, drag&drop
 */
test('click, type, hover, keyboard, drag & drop', async ({ page }) => {
  await page.setContent(`
    <style>
      #drop { width:160px;height:80px;border:2px dashed #888; }
      #drag { display:inline-block;padding:8px;border:1px solid #333; }
    </style>
    <input id="name" />
    <button id="save" title="Saves the form">Save</button>
    <div id="drag" draggable="true">Drag me</div>
    <div id="drop">Drop here</div>
    <script>
      const drop = document.getElementById('drop');
      drop.addEventListener('drop', e => { e.preventDefault(); drop.textContent='Dropped!'; });
      drop.addEventListener('dragover', e => e.preventDefault());
    </script>
  `);

  await page.locator('#name').type('Playwright User');
  await page.getByRole('button', { name: 'Save' }).hover();
  await expect(page.getByRole('button', { name: 'Save' })).toHaveAttribute('title', 'Saves the form');

  const drag = page.locator('#drag');
  const drop = page.locator('#drop');
  await drag.dragTo(drop);
  await expect(drop).toHaveText(/Dropped!/);
});