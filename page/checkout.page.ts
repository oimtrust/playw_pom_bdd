import { expect, Locator, Page } from '@playwright/test';
import * as generalTestID from '@locator/general.locator';
import * as cartTestID from '@locator/cart.locator';
import { TestID } from '@locator/checkout.locator';

export class CheckoutPage {
    readonly page: Page
    readonly checkoutButton: Locator
    readonly yourCartTitle: Locator
    readonly checkoutInformationTitle: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly finishButton: Locator
    readonly completeHeaderMessage: Locator
    readonly backHomeButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator(cartTestID.TestID.CHECKOUT_BUTTON);
        this.yourCartTitle = page.locator(cartTestID.TestID.CHECKOUT_BUTTON);
        this.checkoutInformationTitle = page.locator(generalTestID.TestID.TITLE);
        this.firstNameInput = page.locator(TestID.FIRST_NAME_INPUT);
        this.lastNameInput = page.locator(TestID.LAST_NAME_INPUT);
        this.postalCodeInput = page.locator(TestID.ZIP_CODE_INPUT);
        this.continueButton = page.locator(TestID.CONTINUE_BUTTON);
        this.finishButton = page.locator(TestID.FINISH_BUTTON);
        this.completeHeaderMessage = page.locator(TestID.COMPLETE_HEADER_MESSAGE);
        this.backHomeButton = page.locator(TestID.BACK_HOME_BUTTON);
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
        expect(await this.checkoutInformationTitle).toBeVisible();
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinueButton() {
        await this.continueButton.click();
        expect(await this.finishButton).toBeVisible();
    }

    async clickFinishButton() {
        await this.finishButton.click();
        expect(await this.completeHeaderMessage).toBeVisible();
    }

    async clickBackHomeButton() {
        await this.backHomeButton.click();
        expect(await this.yourCartTitle).toBeVisible();
    }

}

