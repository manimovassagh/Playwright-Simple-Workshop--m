// Using list and html reporters for test results
// Using Desktop Chrome device for tests
// Traces and videos are recorded for every test run
// All tests are located in the ./tests directory
// Playwright configuration for the workshop
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./global-setup.js'),
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'on',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});