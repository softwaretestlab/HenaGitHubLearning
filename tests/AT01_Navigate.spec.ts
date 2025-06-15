import { test, expect } from '@playwright/test';
//jira-123 automation test
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  //new line added to test git commit
});
//jira-1234 automation test
test('has titles', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  //new line added to test git commit
});

//jira-1234xy automation test
test('has titles', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  //new line added to test git commit
});