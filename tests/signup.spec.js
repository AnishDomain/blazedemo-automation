// @ts-check
import { test, expect } from '@playwright/test';

test.only('signup verfication', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#signin2').click()

  await page.locator('#sign-username').fill('Nexus2212')

  await page.locator('#sign-password').fill('Anishvarun2212')

  await page.locator('[onclick="register()"]').click()

  page.on('dialog', async dialog=>{
      
      expect(dialog.message()).toContain('Sign up successful.')
      await dialog.accept()
  })

  
});


test.only('using same creds to signup', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('#signin2').click()

  await page.locator('#sign-username').fill('Nexus2212')

  await page.locator('#sign-password').fill('Anishvarun2212')

  await page.locator('[onclick="register()"]').click()

  page.on('dialog', async dialog=>{
      
      expect(dialog.message()).toContain('This user already exist.')
      await dialog.accept()
  })

  
});





