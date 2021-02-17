const {Builder, Browser, By, Key} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function FindElements(){
    await driver.get("https://www.guru99.com/")
    // var elements = await driver.findElements(By.xpath("//span[text()='Testing']/ancestor::li[@class='active g-fullwidth g-menu-item g-menu-item-118 g-menu-item-type-separator g-parent']/descendant::div[@class='g-grid']/div/ul/li/a/span/span"))
    // console.log(elements);
    var elements2 = await driver.findElements(By.xpath("//li[@class='g-menu-item g-menu-item-type-component g-menu-item-1189  ']/../../..//span[contains(@class,'g-menu-item-title')]"))
    console.log(elements2);
}
FindElements()