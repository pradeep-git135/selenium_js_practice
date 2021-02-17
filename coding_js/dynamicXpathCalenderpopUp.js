const {Builder, Browser, By, Key, until} = require("selenium-webdriver")
const driver =new Builder().forBrowser(Browser.FIREFOX).build()

/*
 This peiece of code will automate calender pop up and selects the current Date
 This module consists of use selenium web-driver
*/

async function datepopup(){
    const date = new Date();
    await driver.manage().setTimeouts( { implicit: 5000 } );
    await driver.get("https://www.cleartrip.com/")

    await driver.findElement(By.id("FromTag")).sendKeys("blr")
    await driver.findElement(By.xpath('//a[text()="Bangalore, IN - Kempegowda International Airport (BLR)"]')).click() 
    
    await driver.findElement(By.id("ToTag")).sendKeys("goa")
    await driver.findElement(By.xpath('//a[text()="Goa, IN - Dabolim Airport (GOI)"]')).click() 

    // await driver.findElement(By.xpath('//td[@data-month="1" and @data-year="2021"]/a[text()="3"]')).click()
    // driver.sleep(3000)

    await driver.findElement(By.xpath('//td[@data-month="'+date.getMonth()+'" and @data-year="'+date.getFullYear()+'"]/a[text()="'+date.getDate()+'"]')).click()
}
datepopup()