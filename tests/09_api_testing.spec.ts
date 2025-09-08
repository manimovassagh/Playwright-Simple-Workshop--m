// Test API requests and responses using Playwright.
import { test, expect } from '@playwright/test';

/**
 * API testing with the built-in request fixture (no browser needed)
 */
test('API test: GET json', async ({ request }) => {
  const res = await request.get('https://httpbin.org/json');
  expect(res.ok()).toBeTruthy();

  const data = await res.json();
  expect(data).toHaveProperty('slideshow');
  expect(data.slideshow).toHaveProperty('title');
});