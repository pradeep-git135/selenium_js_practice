class Blaze {
    get parent(){
        return $("//ul[@class='list-nav-links']")
    }

    get child(){
        return this.parent.$$("li")
    }
    get childElements(){
        return this.child.filter((elements) => {
            console.log(elements.getText());
        })
    }
    get pageheader(){
        return $('//h2[@class="home-features_title"]')
    }
    get productlink(){
        return $("//a[text()='PRODUCT']")
    }
    get clickOnLinkIfdisplayed(){
        if (this.productlink.isDisplayed() == true) {
            this.productlink.click()
        } 
    }
}
module.exports = new Blaze()