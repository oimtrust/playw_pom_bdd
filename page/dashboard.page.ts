import { expect, Locator, Page } from '@playwright/test';
import * as generalTestID from '@locator/general.locator';
import { TestID } from "@locator/dashboard.locator";
import * as generalData from '@data/general.data';

export class DashboardPage {
   readonly page: Page
   readonly productTitle: Locator
   readonly addToCartButton: Locator
   readonly removeFromCartButton: Locator
   readonly burgerMenuButton: Locator
   readonly logoutButton: Locator
   readonly shoppingCartButton: Locator

   constructor(page: Page) {
       this.page = page;
       this.productTitle = page.locator(generalTestID.TestID.TITLE);
       this.addToCartButton = page.locator(TestID.ADD_TO_CART_BUTTON);
       this.removeFromCartButton = page.locator(TestID.REMOVE_FROM_CART_BUTTON);
       this.burgerMenuButton = page.locator(TestID.BURGER_MENU_BUTTON);
       this.logoutButton = page.locator(TestID.LOGOUT_BUTTON);
       this.shoppingCartButton = page.locator(TestID.SHOPPING_CART_BUTTON);
   }

    async clickAddToCartButton() {
        await this.addToCartButton.click();
        expect(await this.removeFromCartButton).toBeVisible();
    }

    async clickRemoveFromCartButton() {
        await this.removeFromCartButton.click();
        expect(await this.addToCartButton).toBeVisible();
    }

    async logout() {
        await this.burgerMenuButton.click();
        await this.logoutButton.click();
        expect(await this.productTitle).toBeVisible();
    }

    async verifyProductTitle() {
        expect(await this.productTitle).toContainText(generalData.Title.PRODUCT_TITLE);
    }
}
