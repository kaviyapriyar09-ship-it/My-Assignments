import test from '@playwright/test'

test("locator using css" ,async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
  await page.locator('id=password').fill("TestLeaf@2025")
    await page.locator('id=Login').click()
    await page.waitForTimeout(12000)
    let title= await page.title()
    console.log(title)
    });
   
