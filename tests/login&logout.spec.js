import { test, expect } from '@playwright/test';

test.only('login verfication with valid creds', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#login2').click()

  await page.locator('#loginusername').fill('Nexus007')

  await page.locator('#loginpassword').fill('Anishvarun2212')

  await page.locator('[onclick="register()"]').click()
  
  const loginName = page.locator('#nameofuser')

  await expect(loginName).toHaveText('Welcome Nexus007')

  await page.locator('#logout2').click() // logout verification

  await expect(page.locator('#signin2')).toHaveText('Sign up')


});

test.only('login verfication with invalid creds', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#login2').click()

  await page.locator('#loginusername').fill('{}{}{}{}')

  await page.locator('#loginpassword').fill('Anishvarun2212')

  await page.locator('[onclick="register()"]').click()

  page.on('dialog', async dialog=>{
      
      expect(dialog.message()).toContain('User does not exist.')
      await dialog.accept()
  })

  await page.locator('//*[@id="logInModal"]/div/div/div[3]/button[1]').click()

});