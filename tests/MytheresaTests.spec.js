const { test, expect } = require('@playwright/test');
const LoginPage = require('../models/Login.page');

test('login', async ({ page, context }) => {
  let loginPage = new LoginPage(page, context);

  await loginPage.navigate();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mytheresa/);

  await loginPage.login('carom33@maildrop.cc', 'MytheresaTest');
  await expect(await loginPage.getWelcomeTitle()).toHaveText == "Welcome Carolina";

}); 

  test('responseOk', async ({ request }) => {
    const response = await request.get('https://www.mytheresa.com/de/en/men')
    await expect(response.status()).toBe(200);
  }); 