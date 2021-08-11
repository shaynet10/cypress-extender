/// <reference types="cypress" />

describe('Very basic test', () =>{
    it('Tests exists', () =>{
        cy.exists('body').should('be.true');
        cy.exists('bodyy').should('be.false');        
    });

    it('Tests visible', () =>{
        cy.isVisible('body').should('be.true');
        cy.isVisible('bodyy').should('be.false');        
    });

    it('Tests hidden', () =>{
        cy.isHidden('body').should('be.false');
        cy.isHidden('bodyy').should('be.false');        
    });

    it('Tests has text', () =>{
        cy.hasText('body', 'default blank page').should('be.true');
        cy.hasText('body', 'default blanket page').should('be.false');        
    });

    it('Tests if condition', () =>{
        if (cy.exists('body') && cy.isVisible('body')) {
            cy.log('body exists and visible');
        } else {
            throw new Error('Not exists or not visible');
        }
    });

});