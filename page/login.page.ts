import { expect, Locator, Page } from '@playwright/test';
import * as process from "process";
import { TestID } from '@locator/login.locator';
import * as generalTestID from '@locator/general.locator';

export class LoginPage {
   private page: Page
   readonly logo: Locator
   readonly usernameInput: Locator
   readonly passwordInput: Locator
   readonly loginButton: Locator
   readonly errorMessage: Locator

   constructor(page: Page) {
       this.page = page;
       this.logo = page.getByText(TestID.LOGIN_LOGO);
       this.usernameInput = page.locator(TestID.USERNAME_INPUT);
       this.passwordInput = page.locator(TestID.PASSWORD_INPUT);
       this.loginButton = page.locator(TestID.LOGIN_BUTTON);
       this.errorMessage = page.locator(generalTestID.TestID.ERROR_MESSAGE);
   }

    public async open(): Promise<void> {
        await this.page.goto(`${process.env.BASE_URL}`);
    }

    async verifyErrorMessage(message: string) {
        await expect(this.errorMessage).toContainText(message);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
