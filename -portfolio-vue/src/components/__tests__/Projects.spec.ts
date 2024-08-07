import { NightwatchBrowser } from 'nightwatch';

module.exports = {
  'Projects Section Test': function (browser: NightwatchBrowser): void {
    browser
      .url('http://localhost:5173/#projects') // Replace with your actual URL
      .waitForElementVisible('#projects', 1000)

      // Check for main section elements
      .assert.textContains('#projects p', 'Projects')
      .assert.hasClass('#projects p', 'text-center')
      .assert.hasClass('#projects p', 'text-3xl')
      .assert.hasClass('#projects p', 'font-bold')

      // Verify each project item
    //   .elements('css selector', '#projects > div > div', function(result) {
    //     this.assert.ok(result.value.length > 0, 'At least one project item is present');
        
    //     result.value.forEach((element: { ELEMENT: string }) => {
    //       // Check project name
    //       this.elementIdText(element.ELEMENT, function(textResult) {
    //         const text = textResult.value as string;
    //         this.assert.ok(text.includes('Seno Medika Clinic Administration'), 'Project name is correct');
    //         this.assert.ok(text.includes('Building a web application with Agile Methodology'), 'Project description is correct');
    //         this.assert.ok(text.includes('Fullstack Developer | UI Designer'), 'Project role is correct');
    //       });

    //       // Check GitHub link
    //       this.elementIdAttribute(element.ELEMENT, 'a', 'href', function(linkResult) {
    //         this.assert.attributeContains(linkResult.value, 'href', 'https://github.com/eunicesarah/seno-medika-clinic-adm-fe', 'GitHub link is correct');
    //       });

    //       // Check background image
    //       this.elementIdCssProperty(element.ELEMENT, 'background-image', function(cssResult) {
    //         this.assert.ok(cssResult.value.includes('/img/seno_bg.png'), 'Background image is correct');
    //       });

    //       // Verify tech stack icons
    //       this.assert.elementPresent(`${element.ELEMENT} img[src="/img/golang.png"]`);
    //       this.assert.elementPresent(`${element.ELEMENT} img[src="/img/postgresql.png"]`);
    //       this.assert.elementPresent(`${element.ELEMENT} img[src="/img/next.png"]`);

    //       // Check hover state for images
    //       this.moveToElement(`${element.ELEMENT} img[src="/img/proj_git.png"]`, 0, 0);
    //       this.assert.hasClass(`${element.ELEMENT} img[src="/img/proj_git.png"]`, 'opacity-100');

    //       // Check for visibility of description on hover
    //       this.assert.hasClass(`${element.ELEMENT} p.text-m`, 'group-hover:visible');
    //     });
    //   })
      .end();
  }
};
