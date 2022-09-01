import { initCypressWithArrays } from '../../../src/index';
initCypressWithArrays();

describe('arrays', () => {
    before(() => {
        cy.visit('https://www.google.com/');
    });
    
    it('test map', () => {
        cy.get('a').map(e => e.text()).then(array => {
            cy.wrap(array.every(v => typeof v === 'string')).should('be.true');
        });
    });

    it('test every prevSubjet is array', () => {
        cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
    });

    it('test every prevSubjet is element', () => {
        cy.get('a').every(e => typeof e.text() === 'string').should('be.true');
    });

    it('test join texts are given', () => {
        cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
    });

    it('test join elements are given', () => {
        cy.get('a').join("HOWAREYOU").should('equal', '');
    });
});

