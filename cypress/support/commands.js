// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "./commands";

import { HomeElements } from './Pages/home';

Cypress.Commands.add("AcessaSite", () => {
  //1.	Entre no site dos correios;
  cy.visit("/");
  //2.	Aceita o termo de Cookies;
  cy.get(HomeElements.btnAceitarCoockie).click();
  //2.	Fecha a Carol (ChatBot);
  cy.get(HomeElements.btnFechaCarol ).then(($btn) => {
    if ($btn.is(":enabled")) {
      cy.wrap($btn).click(); //Button is enabled
    } else {
      //Button is disabled
    }
    cy.apagarBlankCep();
    cy.apagarBlankRastreio();
  });
});

Cypress.Commands.add("apagarBlankCep", () => {
  cy.get(HomeElements.apagarBlankCep).invoke("removeAttr", "target");
});

Cypress.Commands.add("apagarBlankRastreio", () => {
  cy.get(HomeElements.apagarBlankRastreios).invoke("removeAttr", "target");
});
