
import test, { expect } from '@playwright/test'

test("Decathlon",async({page,context})=>{
        await page.goto("https://www.decathlon.in/")
    const Title=await page.title()
    console.log("landing page : "+Title)
    const expTitle="Buy Sporting Goods, Sportswear and Equipments | Download App"
     await expect.soft(Title).toEqual(expTitle)
    console.log(" title verified!!!")
    
   await page.locator("//span[text()='Search for  ']").first().click()
   await expect(page.getByPlaceholder("Search For 60+ Sports and 6000+ Products")).toBeEnabled()
    const searchField = await page.getByPlaceholder("Search For 60+ Sports and 6000+ Products")
         
    searchField.fill("shoes")
    searchField.press("Enter")
    await page.waitForTimeout(3000)
   
    const Title2 =await page.title()
    console.log("Second page: "+Title2)

       const expTitle2="Search | shoes"
    await expect(expTitle2).toEqual(Title2)
    console.log("title is verified!!!")
    
    await page.locator("//span[@class='aisRefinementListLabelText']").first().click()
    await page.locator("//span[contains(text(),'Football boots')]").click()
    await page.locator("//span[contains(text(),'10.5')]").click()
    await page.locator("//span[text()='Most Relevant']").click()
    await page.locator("//a[text()='Price: High to Low']").click()
     await page.locator("//div[@class='swiper-slide swiper-slide-active']").first().click()
    await page.locator("//span[text()='BRAND SIZE']").click()
    await page.waitForTimeout(3000)
    await page.locator("//div[text()='UK 8 - EU 42']").click()
    await page.waitForTimeout(3000)
      await page.getByLabel("addToCart").first().click()
    await page.waitForTimeout(3000)
    await page.locator("//p[text()='Cart']").click()
    const cartTotal= await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText()
    console.log("Cart total amount is: "+cartTotal)
 

})
