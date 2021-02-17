const {Builder, Browser, By, Key} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()
// async function dragAndDrop() {
//     await driver.get("http://demo.guru99.com/test/drag_drop.html")
//     dragElement = await driver.findElement(By.xpath("//li[@id='fourth']/../li[2]"))
//     dropElement = await driver.findElement(By.xpath('//ol[@id="amt7"]'))
//     await driver.actions().dragAndDrop(dragElement,dropElement).perform()
//  }
// dragAndDrop()

async function dragAndDropIframe(){
    await driver.manage().window().maximize()
    await driver.get("https://jqueryui.com/droppable/")
    var iframe = await driver.findElement(By.className("demo-frame"))
    // var frame = await driver.findElement(By.xpath("//iframe[@class='demo-frame']"))
    await driver.switchTo().frame(iframe)
    await driver.sleep(3000)
    var drag = await driver.findElement(By.id("draggable"))
    var drop = await driver.findElement(By.id("droppable"))
    await driver.actions().dragAndDrop(drag, drop).perform()
}
dragAndDropIframe()

// async function controlClick(){
//     await driver.get("https://jqueryui.com/droppable/")
//     let ele = await driver.findElement(By.xpath("//a[text() = 'Demos']"))
//     await driver.actions().sendKeys(Key.CONTROL).click(ele).perform()
// }
// controlClick()

// async function contextClick(){
//     await driver.get("https://jqueryui.com/droppable/")
//     await driver.sleep(3000)
//     await driver.actions().contextClick().perform()
// }
// contextClick()

// async function doubleClick(){
//     await driver.get("http://demo.guru99.com/test/simple_context_menu.html")
//     await driver.sleep(3000)
//     let ele = await driver.findElement(By.xpath("//button[text() = 'Double-Click Me To See Alert']"))
//     await driver.actions().doubleClick(ele).perform()
// }
// doubleClick()
