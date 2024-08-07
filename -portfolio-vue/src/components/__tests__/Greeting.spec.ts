import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'About Me Section Test': function (browser: NightwatchBrowser): void {
    browser
      .url('http://localhost:5173/#greeting')
      .waitForElementVisible('#greeting', 1000)
      .assert.textContains('#greeting p', 'Hi, my name is')
      .assert.attributeContains('#greeting', 'data-aos', 'fade-up')
      .assert.attributeContains('#greeting', 'data-aos-duration', '1000')
      .assert.elementPresent('#greeting img[alt="logoGithub"]')
      .assert.elementPresent('#greeting img[alt="logoLinkedin"]')
      .assert.elementPresent('#greeting img[alt="logoEmail"]')

      .waitForElementVisible('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"]', 1000)

      // Check link attributes
      .assert.attributeContains('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"]', 'href', 'https://www.linkedin.com/in/eunicesarahsiregar/', 'Link href is correct')
      .assert.attributeContains('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"]', 'target', '_blank', 'Link target is correct')

      // Check image attributes
      .assert.elementPresent('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"] img')
      .assert.attributeContains('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"] img', 'src', '/img/linkedin.svg', 'Image src is correct')
      .assert.attributeContains('a[href="https://www.linkedin.com/in/eunicesarahsiregar/"] img', 'alt', 'logoLinkedin', 'Image alt is correct')

        .waitForElementVisible('a[href="https://github.com/eunicesarah"]', 1000)

        // Check link attributes
        .assert.attributeContains('a[href="https://github.com/eunicesarah"]', 'href', 'https://github.com/eunicesarah', 'Link href is correct')
        .assert.attributeContains('a[href="https://github.com/eunicesarah"]', 'target', '_blank', 'Link target is correct')

        // Check image attributes
        .assert.elementPresent('a[href="https://github.com/eunicesarah"] img')
        .assert.attributeContains('a[href="https://github.com/eunicesarah"] img', 'src', '/img/github.svg', 'Image src is correct')
        .assert.attributeContains('a[href="https://github.com/eunicesarah"] img', 'alt', 'logoGithub', 'Image alt is correct')

        .waitForElementVisible('a[href="mailto:eunicesrgr@gmail.com"]', 1000)

        .assert.attributeContains('a[href="mailto:eunicesrgr@gmail.com"]', 'href', 'mailto:eunicesrgr@gmail.com', 'Link href is correct')

      .end();
  }
};