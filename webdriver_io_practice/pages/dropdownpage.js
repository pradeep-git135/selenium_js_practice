class Facebbok {
    get crateaccElement(){return $("//a[text() = 'Create New Account']")}

    clickonelement(element){
        element.waitForDisplayed()
        element.click()
    }

}
module.exports = new Facebbok()