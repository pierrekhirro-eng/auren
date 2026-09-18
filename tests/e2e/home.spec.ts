import { test, expect } from '@playwright/test';

test('home loads the AUREN proposition', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /technology engineered with precision/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /explorar produtos/i })).toBeVisible();
});
