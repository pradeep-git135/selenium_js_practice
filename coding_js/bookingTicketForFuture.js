const{Builder, Browser, By, Key} = require("selenium-webdriver")
var driver  = new Builder().forBrowser(Browser.FIREFOX).build()
/*
 this code will choose the future date to search flights
*/
async function futuredateBooking(){
    await driver.get("https://www.cleartrip.com/")
    await driver.findElement(By.xpath('//i[@class="icon ir datePicker"]/ancestor::section[@class="row fieldRow searchBox"]/descendant::input[@placeholder="Pick a date"][1]')).click()

    var count = 0
    while (count<12) {
        try {
            await driver.findElement(By.xpath('//td[@data-month="11" and @data-year="2021"]/a[text()="24"]')).click()
            break;
        } catch (error) {
            await driver.findElement(By.xpath('//a[@title="Next" and @class="nextMonth "]')).click()
            count++
        }
        
    }

}
futuredateBooking()