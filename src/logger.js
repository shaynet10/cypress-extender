const log = (header, message, ...args) => {
    Cypress.log({
        name: header,
        displayName: header,
        message,
        consoleProps: () => args,
    });
};

export const Info = (message, ...args) => log("INFO", message, ...args);
export const Message = (message, ...args) => log("MESSAGE", message, ...args);
export const Debug = (message, ...args) => log("DEBUG", message, ...args);
export const Warn = (message, ...args) => log("WARN", message, ...args);

export const initCypressWithLogger = () => {
    Cypress.Commands.add('Info', Info);
    Cypress.Commands.add('Message', Message);
    Cypress.Commands.add('Debug', Debug);
    Cypress.Commands.add('Warn', Warn);
};