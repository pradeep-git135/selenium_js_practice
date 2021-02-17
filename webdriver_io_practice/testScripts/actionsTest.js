const actions = require("../pages/actionsPage")

describe('actions handling', () => {
    // it('move to element handling', () => {
    //     browser.url("https://www.spicejet.com/")
    //     browser.maximizeWindow()
    //     actions.moveToelement(actions.loginlink)
    //     actions.moveToelement(actions.spicememeberlink)
    //     actions.moveToelement(actions.memberlogin)
    //     actions.clcikonelemenyt(actions.memberlogin)
    // });
    it('handling keys', () => {
        browser.url("https://the-internet.herokuapp.com/key_presses")
        actions.entersearchfield("Shift")
        console.log(actions.textofresultfield()); 
        browser.pause(5000)
        
    });
    
});