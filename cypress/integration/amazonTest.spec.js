/// <reference types="cypress" />

import { homePage } from "../support/page/homePage";
import { searchResultPage } from "../support/page/searchResultPage";

describe('Amazon test', () => {

    beforeEach('visit home page', () => {
        homePage.visit();
    })

    it('Search', () => {
        homePage.searchProduct('Samsung');
        searchResultPage.getProductTitles().should('contain', 'Samsung' || 'samsung');
    })

    it.only('login', () => {
        cy.amazonLogin(Cypress.env('email'), Cypress.env('password'));
    })

})