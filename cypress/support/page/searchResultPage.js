export class SearchResultPage {

    constructor() {
        this.productBlock = {
            locator: ".s-card-container",
            productTitle: ".s-card-container a.a-link-normal .a-text-normal"
        }
    }

    getProductTitles() {
        return cy.get(this.productBlock.productTitle);
    }

}

export const searchResultPage = new SearchResultPage();