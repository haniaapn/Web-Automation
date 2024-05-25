const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: '/Users/haniapn/Documents/sanber/web-automation/.tmp/new',  // Ubah sesuai dengan lokasi file JSON hasil tes Anda
  reportPath: './cucumber-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
    },
    device: 'MacOS 13.1',
    platform: {
      name: 'macOS',
      version: '13.1',  // Sesuaikan dengan versi macOS Anda
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'kasirAja Testing Automation' },
      { label: 'Release', value: '0.0.1' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' },
    ],
  },
});
