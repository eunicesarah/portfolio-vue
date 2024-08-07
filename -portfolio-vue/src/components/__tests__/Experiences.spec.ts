import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'Experience Section Test': function (browser: NightwatchBrowser): void {
    browser
      .url('http://localhost:5173/#experiences')
      .waitForElementVisible('#experiences', 1000)

      // Check for main section elements
      .assert.textContains('#experiences p', 'Experiences')
      .assert.hasClass('#experiences p', 'text-center')
      .assert.hasClass('#experiences p', 'text-3xl')
      .assert.hasClass('#experiences p', 'font-bold')

    //   // Verify each experience item
    //   .elements('css selector', '#experiences > div', function(result) {
    //     if (Array.isArray(result.value) && result.value.length) {
    //       this.assert.ok(result.value.length > 0, 'At least one experience item is present');
          
    //       result.value.forEach((element: { ELEMENT: string }) => {
    //         this.elementIdText(element.ELEMENT, function (textResult) {
    //           const text = textResult.value as string;
    //           if (typeof text === 'string') {
    //             this.assert.ok(text.includes('Frontend Developer Intern'), 'Role is correct');
    //             this.assert.ok(text.includes('Bangunindo Teknusa Jaya'), 'Company is correct');
    //             this.assert.ok(text.includes('July, 2024 - January, 2025'), 'Duration is correct');
    //             this.assert.ok(text.includes('Developed a web-based application for launching using Vue.js'), 'Description is correct');
    //           } else {
    //             this.assert.fail('Text result is not a string');
    //           }
    //         });
    
    //         // Verify CSS properties and attributes
    //         this.elementIdAttribute(element.ELEMENT, 'data-aos', function(attributeResult) {
    //           if (typeof attributeResult.value === 'string') {
    //             this.assert.strictEqual(attributeResult.value, 'fade-up', 'data-aos attribute is correct');
    //           }
    //         });
    
    //         this.elementIdAttribute(element.ELEMENT, 'data-aos-duration', function(attributeResult) {
    //           if (typeof attributeResult.value === 'string') {
    //             this.assert.strictEqual(attributeResult.value, '1000', 'data-aos-duration attribute is correct');
    //           }
    //         });
    
    //         // Check if image exists and has the correct src attribute if needed
    //         this.elementIdElement(element.ELEMENT, 'css selector', 'img', function(imgResult) {
    //           if (imgResult.status === 0 && imgResult.value) {
    //             const imgElement = imgResult.value as { ELEMENT: string };
    //             this.assert.attributeContains(imgElement.ELEMENT, 'src', '/img/profile.png', 'Image src is correct');
    //           } else {
    //             this.assert.fail('Image is not present or status is not OK');
    //           }
    //         });
    //       });
    //     } else {
    //       this.assert.fail('Result value is not an array or is empty');
    //     }
    //   })
      .end();
  }
};
