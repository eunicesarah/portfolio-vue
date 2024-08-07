import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'About Me Section Test': function (browser: NightwatchBrowser): void {
    browser
      .url('http://localhost:5173/#aboutme')
      .waitForElementVisible('#aboutme', 1000)
      .assert.textContains('#aboutme p', 'About Me')
      .assert.hasClass('#aboutme', 'pt-40')
      .assert.attributeContains('#aboutme', 'data-aos', 'fade-up')
      .assert.attributeContains('#aboutme', 'data-aos-duration', '1000')
      .assert.elementPresent('#aboutme img[alt="aboutme"]')
      .assert.attributeContains('#aboutme img', 'src', '/img/profile.png')
      .assert.cssProperty('#aboutme img', 'border-radius', '1000px')
      .assert.textContains('#aboutme div p', 'Currently in my final year of Computer Science at Bandung Institute of Technology')
      .end();
  }
};