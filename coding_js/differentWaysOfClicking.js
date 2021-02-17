const{Builder, Browser, By, Key} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function differentWaysOfclickingButton(){
    await driver.get("https://opensource-demo.orangehrmlive.com/")
    var element = await driver.findElement(By.id("btnLogin"))
    element.sendKeys(Key.ENTER)
}
differentWaysOfclickingButton()