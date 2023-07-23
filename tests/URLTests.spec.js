const { test, expect } = require('@playwright/test');


test('page has no errors', async ({ page }) => {
    const logs = []
    page.on("console", (message) => {
      logs.push({ message, type: message.type() })
  
    })
  
    const errors = []
    page.on("pageerror", (message) => {
      errors.push({ message, type: message.type() })
  
    })
    await page.goto(process.env.URL)
    console.log(logs)
    expect.soft(logs.length).toBe(0)
    console.log(errors)
    expect(errors.length).toBe(0)
  }); 
  
    test('responseOk', async ({ request }) => {
      const response = await request.get(process.env.URL)
      await expect(response.status()).toBe(200);
      await expect(response).toBeOK();
    }); 