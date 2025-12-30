import test from '@playwright/test'



test("salesforce locator using xpath" ,async ({page}) =>
     {

await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
  await page.locator("//input[contains(@type,'pass')]").fill("TestLeaf@2025")
  await page.locator("//input[@name='Login']").click()
    await page.waitForTimeout(12000)

})

