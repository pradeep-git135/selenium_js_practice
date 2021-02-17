describe('', () => {
    it('', () => {
        browser.url("https://www.blazemeter.com/")
        let ele_array = $$("//ul[@class='list-nav-links']/li")
        browser.pause(3000)
        // console.log(ele_array);
        console.log(ele_array[0].getText()); 
        // ele_array.forEach((element) => {
        //     console.log(element.getText());

        // })
        
    });
    
});