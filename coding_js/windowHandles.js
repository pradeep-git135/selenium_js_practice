const {Builder, Browser} = require("selenium-webdriver")
let driver = new Builder().forBrowser(Browser.CHROME).build()

async function windowHandles(){
    await driver.get("https://www.naukri.com/")
    console.log( await driver.getWindowHandle());
    let windowHandles = await driver.getAllWindowHandles()
    console.log(windowHandles);

    console.log("==============================================");

    for(let i = 0; i<windowHandles.length; i++){
        await driver.switchTo().window(windowHandles[i])
        if(await driver.getTitle()=="HSBC"){
            await driver.close()
        }        
    }
    await driver.quit()
}
windowHandles()