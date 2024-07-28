const { defineConfig } = require("cypress");
const cypressMochawesomeReporter = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true; 
      require('cypress-mochawesome-reporter/plugin')(on);
      cypressMochawesomeReporter(on);
    },
  },
  //reporter: 'mochawesome',
//   reporterOptions: {
//     //sreportDir: 'cypress/reports/mochawesome',
//    // reportFilename: 'report',
//     overwrite: true,
//     html: true,
//     json: true,
//     code:false
//   }
 });
