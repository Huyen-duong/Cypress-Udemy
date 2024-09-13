const { defineConfig } = require('cypress')

 module.exports= defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false, // record a video if script failed;
  e2e: {
    baseUrl: 'http://localhost:4200', // url là hệ thống chúng ta cần test
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'], //không chạy 2 folder này khi chạy cypress
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // chạy các file .js,.ts,.. thay vì chạy cy.js, cy.ts
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
