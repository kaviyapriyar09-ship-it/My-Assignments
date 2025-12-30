import test from '@playwright/test'

test("locator using css" ,async ({page}) => {

await page.goto("https://www.telerik.com/contact")
await page.selectOption("[id=Dropdown-1]",{value:"Licensing/Pricing/Quotes"})
await page.selectOption("#Dropdown-2",{index:5})
await page.selectOption("[id=Country-1]",{label:"India"})
await page.waitForTimeout(12000)
})

