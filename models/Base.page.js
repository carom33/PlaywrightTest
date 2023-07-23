class BasePage{
    constructor(page){
        this.page = page;
    }

    /**
     * Method to navigate to path passed in the config file
     */
    async navigate(){
        await this.page.goto(process.env.URL);
    }

    async navigateToPullRequest(){
        await this.page.goto('https://github.com/appwrite/appwrite/pulls');
    }
}
module.exports = BasePage;