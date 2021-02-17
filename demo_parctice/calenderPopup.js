const{Builder, Browser, By, Key} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function datepopup(){
    await driver.get("https://www.cleartrip.com/")
    // await driver.sleep(3000)
    await driver.wait(until.alertIsPresent(),3000)
    await driver.switchTo().alert().accept()
}
datepopup()