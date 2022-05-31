export const initCypressWithArrays = () => {
    Cypress.Commands.add('map', {
        prevSubject: ['element'],
    }, (subject, callbackFn) => {
        const results = [];
        cy.wrap(subject).each(e => {
            results.push(callbackFn(e));
        });
        return cy.wrap(results);
    });

    Cypress.Commands.add('every', {
        prevSubject: ['element', 'Array'],
    }, (subject, callbackFn) => {
        const results = [];
        cy.wrap(subject).each(e => {
            results.push(callbackFn(e));
        });
        return cy.wrap(results.every(v => v === true));
    });

};
