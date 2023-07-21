class BasePage{
    constructor(page){
        this.page = page;
    }

    /**
     * Method to navigate to path passed
     */
    async navigate(){
        await this.page.goto(process.env.URL);
    }
}
module.exports = BasePage;
