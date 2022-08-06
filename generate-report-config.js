const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'jsonlogs',
  reportPath: './reports/index.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'osx',
      version: 'latest'
    }
  }
});
