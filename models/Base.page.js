class BasePage{
    constructor(page){
        this.page = page;
    }

    /**
     * Method to navigate to path passed
     * @param {string} path 
     */
    async navigate(){
        //await this.page.goto('https://www.mytheresa.com/de/en/men');
        await this.page.goto('');
    }
}
module.exports = BasePage;
