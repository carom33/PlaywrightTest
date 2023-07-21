const { test, expect } = require('@playwright/test');
const LoginPage = require('../models/Login.page');
const config = require('../playwright.config');

test('login succesfully', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mytheresa/);

  await loginPage.login('carom33@maildrop.cc', 'MytheresaTest');
  await expect(await loginPage.getWelcomeTitle()).toHaveText == "Welcome Carolina";

}); 

test('login wrong password', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  await loginPage.login('carom33@maildrop.cc', 'pass');
  await expect(await loginPage.getBadCredentialsError()).toHaveText == "The credentials you have inserted are not correct";

});

test('login wrong email', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  await loginPage.login('carom33@maildrop', 'MytheresaTest');
  await expect(await loginPage.getEmailError()).toHaveText == "Invalid email address";

});

test('login empty email', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  await loginPage.login('', 'MytheresaTest');
  await expect(await loginPage.getEmailError()).toHaveText == "Required field";

});

test('login empty password', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  await loginPage.login('carom33@maildrop.cc', '');
  await expect(await loginPage.getPasswordError()).toHaveText == "Required field";

});