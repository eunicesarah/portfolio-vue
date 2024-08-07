import { NightwatchBrowser } from "nightwatch";

module.exports ={
    'Contact Section Test': function (browser: NightwatchBrowser): void {
        browser
            .url('http://localhost:5173/#contact')
            .waitForElementVisible('#contact', 1000)
            .assert.textContains('#contact h2', 'Send me a message!')
            .assert.textContains('#contact label[for="name"]', 'Your Name')
            .assert.textContains('#contact label[for="email"]', 'Your Email')
            .assert.textContains('#contact label[for="message"]', 'Your Message')
            .assert.textContains('#contact button', 'Send message')
            .assert.hasClass('#contact', 'pt-40')
            .assert.attributeContains('#contact', 'data-aos', 'fade-up')
            .assert.attributeContains('#contact', 'data-aos-duration', '1000')
            .assert.elementPresent('#contact form')
            .assert.elementPresent('#contact input[name="name"]')
            .assert.elementPresent('#contact input[name="email"]')
            .assert.elementPresent('#contact textarea[name="message"]')
            .assert.elementPresent('#contact button[type="submit"]')
            .end();
    }
}