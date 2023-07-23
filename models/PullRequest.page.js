const BasePage = require('./Base.page');

class PullRequestPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.titlesName = '.js-navigation-open.markdown-title'
        this.openTime = '.opened-by relative-time'
        this.author ='.opened-by a[title*=\'created by\']'
        this.nextButton = 'a.next_page'
    }

    async navigate(){
        await super.navigateToPullRequest()
    }

    async getTitlePRList(){
        const PRname = await this.page.locator(this.titlesName).allTextContents()
        return PRname
    }

    async getDateList(){
        const dates = await this.page.locator(this.openTime).allTextContents()
        return dates
    }

    async getAuthorList(){
        const author = await this.page.locator(this.author).allTextContents()
        return author
    }

    async clickNextButton(){
        try{
            await this.page.click(this.nextButton, { timeout: 7000 })
            return true
        }
        catch(e){
            return false
        }
        
        

    }
}

module.exports = PullRequestPage;