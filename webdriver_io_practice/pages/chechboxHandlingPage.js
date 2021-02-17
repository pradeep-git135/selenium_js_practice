class Checkbox {
    checkboxlink(){
        return $("//a[text() = 'Checkboxes']")
    }
    clickOncheckbox(){
        this.checkboxlink().click()
    }
    checkbox1(){
        return $('//form[@id="checkboxes"]/child::input[1]')
    }
    clickOncheckbox1(){
        this.checkbox1().click()
    }
    get header(){
        return $("//h3[text() = 'Checkboxes']")
    }
}
module.exports = new Checkbox()