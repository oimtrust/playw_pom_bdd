import { Given, When, Then } from './fixtures';
import { expect } from '@playwright/test';
import * as generalData from '@data/general.data';

Given('I have items in my cart', async ({ loginPage, dashboardPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await dashboardPage.clickAddToCartButton();
  await dashboardPage.shoppingCartButton.click();
});

Given('I am on the checkout information page', async ({ loginPage, dashboardPage, checkoutPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await dashboardPage.clickAddToCartButton();
  await dashboardPage.shoppingCartButton.click();
  await checkoutPage.clickCheckoutButton();
});

When('I click checkout button', async ({ checkoutPage }) => {
  await checkoutPage.clickCheckoutButton();
});

When('I proceed to checkout', async ({ checkoutPage }) => {
  await checkoutPage.clickCheckoutButton();
});

When('I fill checkout information with first name {string}, last name {string}, and postal code {string}', 
async ({ checkoutPage }, firstName: string, lastName: string, postalCode: string) => {
  await checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
});

When('I enter checkout information:', async ({ checkoutPage }, dataTable) => {
  const data = dataTable.hashes()[0];
  await checkoutPage.fillCheckoutInformation(
    data.firstName,
    data.lastName, 
    data.postalCode
  );
});

When('I fill valid checkout information', async ({ checkoutPage }) => {
  await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
});

When('I click continue button', async ({ checkoutPage }) => {
  await checkoutPage.clickContinueButton();
});

When('I proceed to overview', async ({ checkoutPage }) => {
  await checkoutPage.clickContinueButton();
});

When('I click finish button', async ({ checkoutPage }) => {
  await checkoutPage.clickFinishButton();
});

When('I complete the order', async ({ checkoutPage }) => {
  await checkoutPage.clickFinishButton();
});

When('I click back home button', async ({ checkoutPage }) => {
  await checkoutPage.clickBackHomeButton();
});

When('I go back to products', async ({ checkoutPage }) => {
  await checkoutPage.clickBackHomeButton();
});

Then('I should see checkout information page', async ({ page }) => {
  await expect(page.locator('[data-test="title"]')).toContainText(generalData.Title.CHECKOUT_TITLE);
});

Then('I should be on checkout information page', async ({ checkoutPage }) => {
  await expect(checkoutPage.checkoutInformationTitle).toBeVisible();
});

Then('I should see checkout overview page', async ({ page }) => {
  await expect(page.locator('[data-test="title"]')).toContainText(generalData.Title.OVERVIEW_TITLE);
});

Then('I should be on checkout overview page', async ({ checkoutPage }) => {
  await expect(checkoutPage.finishButton).toBeVisible();
});

Then('I should see order completion page', async ({ page }) => {
  await expect(page.locator('[data-test="title"]')).toContainText(generalData.Title.COMPLETE_TITLE);
});

Then('I should see thank you message', async ({ checkoutPage }) => {
  await expect(checkoutPage.completeHeaderMessage).toContainText(generalData.Title.THANK_YOU_TITLE);
});

Then('the order should be completed successfully', async ({ checkoutPage }) => {
  await expect(checkoutPage.completeHeaderMessage).toBeVisible();
});

Then('I should return to products page', async ({ dashboardPage }) => {
  await dashboardPage.verifyProductTitle();
});