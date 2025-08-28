import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '@page/login.page';
import { DashboardPage } from '@page/dashboard.page';
import { CheckoutPage } from '@page/checkout.page';

type TestFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export const { Given, When, Then } = createBdd(test);