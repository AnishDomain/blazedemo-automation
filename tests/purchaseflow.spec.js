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
      
      expect(dialog.message()).toContain('Product added.')
      await dialog.accept()
    }) 

    await page.locator('//*[@id="nava"]').click()

    await page.locator('//a[3]').click()

    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()

    await expect(page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Sony vaio i5')//asasertion

    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click()
    
   
    await page.locator('//*[@id="cartur"]').click()

    await page.locator('[data-target="#orderModal"]').click() //placing order

    await expect(page.locator('#orderModalLabel')).toHaveText('Place order')

    const name = 'mackchow'
    const country = 'islam'
    const city = 'bernol'
    const cardNumber = "CKIM22330003"
    const month  ='04'
    const year ='2036'



    await page.locator('#name').fill(name)

    await page.locator('#country').fill(country)

    await page.locator('#city').fill(city)


    await page.locator('#card').fill(cardNumber)

    await page.locator('#month').fill(month)

    await page.locator('#year').click(year)

    await page.locator('[onclick="purchaseOrder()"]').click()

    await expect(page.locator("h2[css='3']")).toHaveText('Thank you for your purchase!')


    await expect(page.locator('.lead ')).toContainText(name)

     await expect(page.locator('.lead ')).toContainText(cardNumber)

     const date = new Date()
     date = date.toISOString().slice(0,10) // getting the current date as string 

     await expect(page.locator('.lead')).toContainText(date)

      await page.locator('.confirm').click()
     
      await page.locator('[onclick="showcart()"]').click() //making sure the cart is empty after order
      await page.locator('#tbodyid').not.toHaveText('Samsung galaxy s6')
      await page.locator('#tbodyid').not.toHaveText('Sony vaio i5')

      await expect(page.locator('[onclick="purchaseOrder()"]')).toBeDisabled()

      await page.locator('[onclick="purchaseOrder()"]').click() //placing order with out product in cart

      await expect(page.locator('form')).not.toBeVisible();

});