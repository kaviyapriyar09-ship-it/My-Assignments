import test from '@playwright/test'



test("Facebook Registration" ,async ({page}) =>
     {

await page.goto("https://en-gb.facebook.com/")

    await page.locator("._6ltg a").click()
  await page.locator("//input[@name='firstname']").fill("Kaviya")
  await page.locator("//input[contains(@name,'last')]").fill("Priya")
   
    await page.selectOption("#day",{value:"27"})
    
    await page.selectOption("#month",{index:5})
    
    await page.selectOption("#year",{label:"1992"})
     await page.locator("._58mt").check()
   await page.locator("//input[@name='reg_email__']").fill("kaviyapriya.r09@gmail.com")
  await page.locator("#password_step_input").fill("godisgreat@2025")
  await page.waitForTimeout(2000)
     })