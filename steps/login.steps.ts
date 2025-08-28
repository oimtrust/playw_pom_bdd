import { Given, When, Then } from './fixtures';
import { expect } from '@playwright/test';
import * as authData from '@data/auth.data';

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.open();
});

Given('I have opened the login page', async ({ loginPage }) => {
  await loginPage.open();
});

When('I enter username {string}', async ({ loginPage }, username: string) => {
  const actualUsername = username === 'standard_user' 
    ? authData.AuthData.STANDARD_USER.username 
    : username;
  await loginPage.usernameInput.fill(actualUsername);
});

When('I enter password {string}', async ({ loginPage }, password: string) => {
  const actualPassword = password === 'valid_password' 
    ? authData.AuthData.PASSWORD.password 
    : password;
  await loginPage.passwordInput.fill(actualPassword);
});

When('I enter invalid username {string}', async ({ loginPage }, username: string) => {
  await loginPage.usernameInput.fill(username);
});

When('I enter invalid password {string}', async ({ loginPage }, password: string) => {
  await loginPage.passwordInput.fill(password);
});

When('I click the login button', async ({ loginPage }) => {
  await loginPage.loginButton.click();
});

When('I login with username {string} and password {string}', async ({ loginPage }, username: string, password: string) => {
  const actualUsername = username === 'standard_user' 
    ? authData.AuthData.STANDARD_USER.username 
    : username;
  const actualPassword = password === 'valid_password' 
    ? authData.AuthData.PASSWORD.password 
    : password;
  
  await loginPage.login(actualUsername, actualPassword);
});

When('I login with valid credentials', async ({ loginPage }) => {
  await loginPage.login(
    authData.AuthData.STANDARD_USER.username,
    authData.AuthData.PASSWORD.password
  );
});

When('I login with invalid credentials', async ({ loginPage }) => {
  await loginPage.login(
    authData.AuthData.STANDARD_USER.username,
    'invalid_password'
  );
});

When('I leave username field empty', async ({ loginPage }) => {
  await loginPage.usernameInput.fill('');
});

When('I leave password field empty', async ({ loginPage }) => {
  await loginPage.passwordInput.fill('');
});

Then('I should see error message {string}', async ({ loginPage }, expectedMessage: string) => {
  let actualMessage = expectedMessage;
  
  switch (expectedMessage) {
    case 'login_error':
      actualMessage = authData.Messages.LOGIN_ERROR;
      break;
    case 'password_required_error':
      actualMessage = authData.Messages.PASSWORD_REQUIRED_ERROR;
      break;
    case 'username_required_error':
      actualMessage = authData.Messages.USERNAME_REQUIRED_ERROR;
      break;
    case 'locked_out_error':
      actualMessage = authData.Messages.LOCKED_OUT_ERROR;
      break;
  }
  
  await loginPage.verifyErrorMessage(actualMessage);
});

Then('I should be redirected to dashboard', async ({ dashboardPage }) => {
  await dashboardPage.verifyProductTitle();
});

Then('I should see the products page', async ({ dashboardPage }) => {
  await dashboardPage.verifyProductTitle();
});

Then('I should remain on login page', async ({ loginPage }) => {
  await expect(loginPage.logo).toBeVisible();
});