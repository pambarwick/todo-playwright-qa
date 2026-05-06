import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'https://demo.playwright.dev',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
    },
  ],
});