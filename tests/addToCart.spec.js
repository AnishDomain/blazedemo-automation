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

    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click()
    

    await page.locator('//*[@id="nava"]').click()

    await page.locator('//a[4]').click()

    await page.locator('//*[@id="tbodyid"]/div[1]/div/div/h4/a').click()

    await expect(page.locator('//*[@id="tbodyid"]/h2')).toHaveText('Apple monitor 24')//assertion

    await page.locator('//*[@id="tbodyid"]/div[2]/div/a').click()
    

    await page.locator('//*[@id="cartur"]').click()

const arrOfTitle = await page.$$('.success > td:nth-child(2)');
const arrOfPrice = await page.$$('.success > td:nth-child(3)');

let product1TitleStatus = "false";
let product2TitleStatus = "false";
let product3TitleStatus = "false";

// DEBUG: Check all titles
for (const title of arrOfTitle) {
    const text = (await title.textContent())?.trim(); // trim & null check
    console.log("Title found:", text);
    if (text === 'Apple monitor 24') {
        product1TitleStatus = 'true';
    }
    if (text === 'Sony vaio i5') {
        product2TitleStatus = 'true';
    }
    if (text === 'Samsung galaxy s6') {
        product3TitleStatus = 'true';
    }
}

await expect(product1TitleStatus).toContain('true');
await expect(product2TitleStatus).toContain('true');
await expect(product3TitleStatus).toContain('true');

let product1PriceStatus = "false";
let product2PriceStatus = "false";
let product3PriceStatus = "false";

// DEBUG: Check all prices
for (const price of arrOfPrice) {
    const value = (await price.textContent())?.trim(); // trim & null check
    console.log("Price found:", value);
    if (value === '400') {
        product1PriceStatus = 'true';
    }
    if (value === '790') {
        product2PriceStatus = 'true';
    }
    if (value === '360') {
        product3PriceStatus = 'true';
    }
}

await expect(product1PriceStatus).toContain('true');
await expect(product2PriceStatus).toContain('true');
await expect(product3PriceStatus).toContain('true');

// Total amount logic
let expectedTotalAmount = 1550;
let actualTotalAmount = 0;

for (let i = 0; i < arrOfPrice.length; i++) {
    const priceText = (await arrOfPrice[i].textContent())?.trim();
    console.log("Adding price:", priceText);
    actualTotalAmount += parseInt(priceText);
}

console.log("Expected total:", expectedTotalAmount, "Actual total:", actualTotalAmount);

await expect(actualTotalAmount).toBe(expectedTotalAmount);



});