export class HomePage {

    constructor() {
        this.searchLine = '#twotabsearchtextbox';
        this.searchSubmitButton = '#nav-search-submit-button';
    }

    visit() {
        cy.visit('/');
    }

    typeSearchLine(string) {
        cy.get(this.searchLine).clear().type(string);
    }

    clickSubmitButton() {
        cy.get(this.searchSubmitButton).click();
    }

    searchProduct(string) {
        this.typeSearchLine(string);
        this.clickSubmitButton();
    }

}

export const homePage = new HomePage();