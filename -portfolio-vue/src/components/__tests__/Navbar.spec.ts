import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'Navigation Bar Test': function (browser: NightwatchBrowser): void {
    browser
      .url('http://localhost:5173') // Replace with your local URL
      .waitForElementVisible('nav', 1000)

      // Test that the navigation bar is visible
      .assert.visible('nav')
      .assert.textContains('nav a[href="#aboutme"]', 'About Me')
      .assert.textContains('nav a[href="#projects"]', 'Projects')
      .assert.textContains('nav a[href="#experiences"]', 'Experiences')
      .assert.textContains('nav a[href="#contact"]', 'Contact')

      // Test individual menu item links
      .click('a[href="#projects"]') // Click Projects
      .pause(1000)
      .assert.urlContains('#projects') // Verify URL change

      .click('a[href="#experiences"]') // Click Experiences
      .pause(1000)
      .assert.urlContains('#experiences') // Verify URL change

      .click('a[href="#contact"]') // Click Contact
      .pause(1000)
      .assert.urlContains('#contact') // Verify URL change

      .end();
  }
};
