const {Builder, Browser} = require("selenium-webdriver")
let driver = new Builder().forBrowser(Browser.CHROME).build()

async function frequentlyUsedMethods(){
    await driver.get("https://mochajs.org/#hooks")
    let url = await driver.getCurrentUrl()
    console.log(url);
    let title = await driver.getTitle()
    console.log(title);
    let htmlcode = await driver.getPageSource()
    console.log(htmlcode.length);
    await driver.manage().window().maximize()
    await driver.navigate().to("https://webdriver.io/docs/api/browser/pause.html")
    await driver.sleep(3000)
    let title2 = await driver.getTitle()
    console.log(title2);
    await driver.navigate().back()
    await driver.navigate().forward()
    await driver.navigate().refresh()
}
frequentlyUsedMethods()

