const{Builder, Browser, By, Key, until} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.FIREFOX).build()
var obj = require("E:/selenium_js_practice/coding_js/dateutils.js")
var day = obj.getday()
var month = obj.getmonth()
var date = obj.getdate()
var year = obj.getyear()

async function webdriverWait(){
    await driver.get("https://www.makemytrip.com/")
    await driver.manage().setTimeouts({implicit:3000})

    //clicks on one way
    var element = await driver.findElement(By.xpath("//li[@data-cy='oneWayTrip']"))
    const actions = driver.actions();
    await actions.move({origin:element}).click().perform()

    // clicks on from and enters blr
    await driver.findElement(By.xpath("//span[text()='From']")).click()
    await driver.findElement(By.xpath("//input[@placeholder='From']")).sendKeys("BLR")
    const ele =  await driver.findElement(By.xpath("//p[text()='Bengaluru, India']"))
    await driver.wait(until.elementIsVisible(ele), 3000)
    await ele.click()

    // clicks on to and enters goa
    await driver.findElement(By.xpath("//span[text()='To']")).click()
    await driver.findElement(By.xpath("//input[@placeholder='To']")).sendKeys("GOI")
    const ele1 =  await driver.findElement(By.xpath("//p[text()='Goa, India']"))
    await driver.wait(until.elementIsVisible(ele1),3000)
    await ele1.click()

    await driver.findElement(By.xpath("//label[@for='departure']")).click()


    await driver.findElement(By.xpath("//div[@aria-label='"+day+" "+month+" "+date+" "+year+"']")).click()    
}
webdriverWait()