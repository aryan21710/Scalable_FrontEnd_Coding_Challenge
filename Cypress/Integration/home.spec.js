import {homeUrl,headerText,homePageText,footerText} from '../../src/common/constants'
describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport('macbook-15');
    });

    it('Validation of Header Component', () => {
        cy.url().should('eq', homeUrl);
        cy.get('h6').contains(headerText);
    });

    it('Validation of Home Page Text Component', () => {
        cy.url().should('eq', homeUrl);
        cy.get('p').contains(homePageText);
    });

    it('Validation of Menu Links', () => {
        cy.url().should('eq', homeUrl);
        cy.get('a').should('have.length', 3);
        cy.get('a').contains('Home');
        cy.get('a').contains('Table-View');
        cy.get('a').contains('Chart-View');
    });

    it('Validation of Footer Component', () => {
        cy.url().should('eq', homeUrl);
        cy.get('h6').contains(footerText);
    });

    it ('Validation of URL Redirect for Menu Links', ()=>{
        cy.get('a').contains('Table-View').click({ force: true });
        cy.url().should('include', '/table');
        cy.get('a').contains('Home').click({ force: true });
        cy.url().should('include', '/');
        cy.get('a').contains('Chart-View').click({ force: true });
        cy.url().should('include', '/chart');
    });

});
