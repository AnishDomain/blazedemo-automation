import { LoginPage } from "../pages/loginpage";


import { test, expect } from '@playwright/test';

test.only('login verfication with valid creds', async ({ page }) => {
  

    const login = new LoginPage(page)

    await login.gotoLoginPage()

    await login.login('Nexus007','Anishvarun2212')

    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()

    await expect(page.locator('.name')).toHaveText('Samsung galaxy s6')//assertiob

    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click()
    page.on('dialog', async dialog=>{
      
      expect(dialog.message()).toContain('Product added')
      await dialog.accept()
    }) 

    await page.locator('//*[@id="nava"]').click()

    await page.locator('//a[3]').click()

    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()

    await expect(page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Sony vaio i5')//asasertion

    await Page.locator('//*[@id="tbodyid"]/div[2]/div/a').click()
    page.on('dialog', async dialog=>{
      
      expect(dialog.message()).toContain('Product added')
      await dialog.accept()
    }) 

    await expect(page.locator('form')).not.toBeVisible();  // verifying no product remains after deletion




});