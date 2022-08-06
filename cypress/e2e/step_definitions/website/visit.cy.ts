import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('First test using cucumber', () => {});

When('I visit my website', () => {
  cy.goToWebsite();
});

Then('I can find my name {string}', (text: string) => {
  const regex = new RegExp(text);
  cy.findByText(regex).should('be.visible');
});
