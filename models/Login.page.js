const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page, context){
        super(page);
        this.context = context;

        // selectors
        this.modal = '#privacy-cat-modal';
        this.acceptCookiesBtn = '.btn.btn-all';
        this.iconUser = '//span[@class=\'icon__user\']';
        this.emailTxt =  '.signinform [name=\'email\']';
        this.passwordTxt =  '.signinform [name=\'password\']';
        this.loginBtn = '.signinform__submit .button';
        this.overviewTitle = '.overview__title';
    }
    /**
     * Method to navigate to Login page using parent's method
     */
    async navigate(){  
       await this.context.addCookies([{name:"mt_csf", value: "15340000", url: "https://www.mytheresa.com/de/en/men"}]);
       await super.navigate();

       //this.page.on('dialog', dialog => dialog.accept());
       //await this.page.getByRole('button').click();
       //await this.page.click(this.acceptCookiesBtn);
       //await this.page.getByRole('button', { name: 'ACCEPT ALL AND CONTINUE' }).click();
    }
    /**
     * Method to login using email and password
     * @param {string} email 
     * @param {string} password 
     */
    async login(email, password){0
        await this.page.click(this.iconUser);
        await this.page.fill(this.emailTxt,email);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);
    }

    async getWelcomeTitle(){
        let title = await this.page.innerText(this.overviewTitle)
        return title;
    }

}
module.exports = LoginPage;
