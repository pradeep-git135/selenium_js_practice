const {Builder, Browser, By} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function dropDown(){
    await driver.get("https://www.guru99.com/")
    var dropDown = await driver.findElement(By.xpath("//span[text() =  'Testing']"))
    // await driver.actions().move({origin:dropDown}).perform()
    // await driver.findElement(By.xpath("//span[text() = ' Selenium']")).click()
}
dropDown()