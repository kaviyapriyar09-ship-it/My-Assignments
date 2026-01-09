import test, { expect } from '@playwright/test'

test("PVR Cinemas",async({page,context})=>{
    page.on("dialog",dialogbox=>{

console.log("TYPE of alert"+dialogbox.type())
if (dialogbox.type() === "sweet alert"){

    dialogbox.accept()
}
})

    await page.goto("https://www.pvrcinemas.com/")
         await page.getByRole('heading',{name:"Chennai"}).click()
         await page.waitForTimeout(5000)
         await page.locator("//span[text()='Cinema']").click()

     
        await page.waitForTimeout(5000)
       
        await page.locator("//span[text()='Select Cinema']").click()
await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()
    await page.locator("//span[contains(text(),'Tomorrow')]").click()
    await page.locator("(//span[text()='THE HOUSEMAID'])[2]").click()
    await page.locator("//span[contains(text(),'03:00 PM')]").click()
await page.locator("//button[@aria-label='Submit']").click()
await page.locator("//button[text()='Accept']").click()
await page.locator("[id='CL.CLUB|I:7']").click()
const seat=await page.locator("[class='seat-info']").innerText()
console.log(seat)
const ticketprice=await page.locator("[class='grand-amount']").innerText()
console.log(ticketprice)
await expect(page.locator("[class='seat-info']")).toContainText("Seat InfoCLUBI7")
await page.locator("//button[text()='Proceed']").click()
     
})