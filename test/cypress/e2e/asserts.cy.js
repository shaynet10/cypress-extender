import '../../../src/index.js';

describe('asserts', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/');
    });
    
    it('test exists', () => {
        cy.exists('body').should('be.true');
        cy.exists('bodyy').should('be.false'); 
    });
    
    it('test isVisible', () => {
        cy.isVisible('body').should('be.true');
        cy.isVisible('bodyy').should('be.false'); 
    });
    
});
