import { initCypressWithArrays } from 'cypress-extender';
initCypressWithArrays();

describe('arrays', () => {
    beforeEach(() => {
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

});

