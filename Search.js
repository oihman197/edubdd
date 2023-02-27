const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('User get homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
});

When("User click search and writes 'some text' and submit", () => {
    cy.get('#searchTerm').type('some text {enter}')
});

Then('User will get search result page', () => {
    cy.get('h2').should('contain.text', 'Search Result')
});