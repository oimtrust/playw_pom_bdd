import { Given, When, Then } from './fixtures';
import { expect } from '@playwright/test';
import * as generalData from '@data/general.data';

Given('I am logged in to the dashboard', async ({ loginPage, dashboardPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await dashboardPage.verifyProductTitle();
});

Given('I am on the products page', async ({ dashboardPage }) => {
  await dashboardPage.verifyProductTitle();
});

When('I add an item to cart', async ({ dashboardPage }) => {
  await dashboardPage.clickAddToCartButton();
});

When('I click add to cart button', async ({ dashboardPage }) => {
  await dashboardPage.clickAddToCartButton();
});

When('I remove an item from cart', async ({ dashboardPage }) => {
  await dashboardPage.clickRemoveFromCartButton();
});

When('I click remove from cart button', async ({ dashboardPage }) => {
  await dashboardPage.clickRemoveFromCartButton();
});

When('I click on shopping cart icon', async ({ dashboardPage }) => {
  await dashboardPage.shoppingCartButton.click();
});

When('I navigate to cart', async ({ dashboardPage }) => {
  await dashboardPage.shoppingCartButton.click();
});

When('I logout from the application', async ({ dashboardPage }) => {
  await dashboardPage.logout();
});

When('I click logout', async ({ dashboardPage }) => {
  await dashboardPage.logout();
});

When('I open burger menu', async ({ dashboardPage }) => {
  await dashboardPage.burgerMenuButton.click();
});

Then('the item should be added to cart', async ({ dashboardPage }) => {
  await expect(dashboardPage.removeFromCartButton).toBeVisible();
});

Then('I should see remove from cart button', async ({ dashboardPage }) => {
  await expect(dashboardPage.removeFromCartButton).toBeVisible();
});

Then('the item should be removed from cart', async ({ dashboardPage }) => {
  await expect(dashboardPage.firstAddToCartButton).toBeVisible();
});

Then('I should see add to cart button', async ({ dashboardPage }) => {
  await expect(dashboardPage.firstAddToCartButton).toBeVisible();
});

Then('I should see cart icon with badge', async ({ dashboardPage }) => {
  await expect(dashboardPage.shoppingCartButton).toBeVisible();
});

Then('I should see shopping cart page', async ({ page }) => {
  await expect(page.locator('[data-test="title"]')).toContainText(generalData.Title.CART_TITLE);
});

Then('I should be logged out successfully', async ({ loginPage }) => {
  await expect(loginPage.logo).toBeVisible();
});

Then('I should see products title', async ({ dashboardPage }) => {
  await expect(dashboardPage.productTitle).toContainText(generalData.Title.PRODUCT_TITLE);
});

Then('I should see the dashboard', async ({ dashboardPage }) => {
  await dashboardPage.verifyProductTitle();
});