const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page, context){
        super(page);
        this.context = context;

        // selectors
        this.frameModal = 'iframe[id=\'privacy-iframe\']';
        this.acceptCookiesBtn = '//button[@class=\'btn btn-all\']';
        this.iconUser = '//span[@class=\'icon__user\']';
        this.emailTxt =  '.signinform [name=\'email\']';
        this.passwordTxt =  '.signinform [name=\'password\']';
        this.loginBtn = '.signinform__submit .button';
        this.overviewTitle = '.overview__title';
        this.badCredentialsTxt = ".notification--error .notification__content";
        this.requiredEmailTxt = '.form__element--email .forminput__content__error';
        this.requiredPasswordTxt = '.form__element--password .forminput__content__error';
    }
    /**
     * Method to navigate to Login page using parent's method
     */
    async navigate() {
        // configure cookies to avoid captcha
        await this.context.addCookies([{ name: "mt_csf", value: "15340000", url: "https://www.mytheresa.com/de/en/men" }]);
        await super.navigate();

        // Close the frame Accepting and continue
        const frame = await this.page.frameLocator(this.frameModal);
        await frame.locator(this.acceptCookiesBtn).click();
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

    async getBadCredentialsError(){
        let error = await this.page.innerText(this.badCredentialsTxt)
        return error
    }

    async getEmailError(){
        let error = await this.page.innerText(this.requiredEmailTxt)
        return error
    }

    async getPasswordError(){
        let error = await this.page.innerText(this.requiredPasswordTxt)
        return error
    }

}
module.exports = LoginPage;
