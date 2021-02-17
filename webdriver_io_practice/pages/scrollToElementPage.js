
class Scrolltoelement{

    get faq_ele(){
        return $('//tr[@class="footer-subheadings"]//a[text() = "FAQ"]')
    }
    movetoelement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    clickonelement(element){
        element.waitForDisplayed()
        element.click()
    }
}
module.exports = new Scrolltoelement()