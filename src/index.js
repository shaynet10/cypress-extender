export { Info, INFO, Message, MESSAGE, Debug, DEBUG, Warn, WARN, Custom, CUSTOM, initCypressWithLogger } from './logger';
export { initCypressWithArrays } from './array';

const found = (selector) => Cypress.$(selector).length > 0;

export const exists = (selector) => found(selector);
export const isVisible = (selector) => found(`${selector}:visible`);
export const isCheckbox = (selector) => found(`${selector}:checkbox`);
export const isChecked = (selector) => found(`${selector}:checked`);
export const contains = (selector, text) => found(`${selector}:contains(${text})`);
export const equals = (selector, text) => found(`${selector}:eq(${text})`);
export const isEmpty = (selector) => found(`${selector}:empty)`);
export const hasNoChildren = (selector) => found(`${selector}:empty)`);
export const isDisabled = (selector) => found(`${selector}:disabled`);
export const isEnabled = (selector) => found(`${selector}:enabled`);
export const isFile = (selector) => found(`${selector}:file`);
export const isFirstChild = (selector) => found(`${selector}:first-child`);
export const isFocused = (selector) => found(`${selector}:focus`);
export const hasSelector = (selector, innerSelector) => found(`${selector}:has(${innerSelector})`);
export const isHeader = (selector) => found(`${selector}:header`);
export const isHidden = (selector) => found(`${selector}:hidden`);
export const isImage = (selector) => found(`${selector}:image`);
export const isInput = (selector) => found(`${selector}:input`);
export const isAnimated = (selector) => found(`${selector}:animated`);
export const isButton = (selector) => found(`${selector}:button`);
export const isLanguage = (selector) => found(`${selector}:language`);
export const isLast = (selector) => found(`${selector}:last`);
export const isLastChild = (selector) => found(`${selector}:last-child`);
export const isLastOfType = (selector) => found(`${selector}:last-of-type`);
export const isNot = (selector, notSelector) => found(`${selector}:not(${notSelector})`);
export const isParent = (selector) => found(`${selector}:parent`);
export const isPassword = (selector) => found(`${selector}:password`);
export const isRadio = (selector) => found(`${selector}:radio`);
export const isReset = (selector) => found(`${selector}:reset`);
export const isRoot = (selector) => found(`${selector}:root`);
export const isSelected = (selector) => found(`${selector}:selected`);
export const isSubmit = (selector) => found(`${selector}:submit`);
export const isText = (selector) => found(`${selector}:text`);

export const initCypress = () => {
    declare global {
        namespace Cypress {
            interface Chainable {
                exists(selector: string): Chainable<boolean>;
                isVisible(selector: string): Chainable<boolean>;
                isCheckbox(selector: string): Chainable<boolean>;
                isChecked(selector: string): Chainable<boolean>;
                contains(selector: string, text: string): Chainable<boolean>;
                equals(selector: string, text: string): Chainable<boolean>;
                isEmpty(selector: string): Chainable<boolean>;
                hasNoChildren(selector: string): Chainable<boolean>;
                isDisabled(selector: string): Chainable<boolean>;
                isEnabled(selector: string): Chainable<boolean>;
                isFile(selector: string): Chainable<boolean>;
                isFirstChild(selector: string): Chainable<boolean>;
                isFocused(selector: string): Chainable<boolean>;
                hasSelector(selector: string, innerSelector: string): Chainable<boolean>;
                isHeader(selector: string): Chainable<boolean>;
                isHidden(selector: string): Chainable<boolean>;
                isImage(selector: string): Chainable<boolean>;
                isInput(selector: string): Chainable<boolean>;
                isAnimated(selector: string): Chainable<boolean>;
                isButton(selector: string): Chainable<boolean>;
                isLanguage(selector: string): Chainable<boolean>;
                isLast(selector: string): Chainable<boolean>;
                isLastChild(selector: string): Chainable<boolean>;
                isLastOfType(selector: string): Chainable<boolean>;
                isNot(selector: string, notSelector: string): Chainable<boolean>;
                isParent(selector: string): Chainable<boolean>;
                isPassword(selector: string): Chainable<boolean>;
                isRadio(selector: string): Chainable<boolean>;
                isReset(selector: string): Chainable<boolean>;
                isRoot(selector: string): Chainable<boolean>;
                isSelected(selector: string): Chainable<boolean>;
                isSubmit(selector: string): Chainable<boolean>;
                isText(selector: string): Chainable<boolean>;
            }
        }
    }

    Cypress.Commands.add('exists', exists);
    Cypress.Commands.add('isVisible', isVisible);
    Cypress.Commands.add('isCheckbox', isCheckbox);
    Cypress.Commands.add('isChecked', isChecked);
    Cypress.Commands.add('contains', contains);
    Cypress.Commands.add('equals', equals);
    Cypress.Commands.add('isEmpty', isEmpty);
    Cypress.Commands.add('hasNoChildren', hasNoChildren);
    Cypress.Commands.add('isDisabled', isDisabled);
    Cypress.Commands.add('isEnabled', isEnabled);
    Cypress.Commands.add('isFile', isFile);
    Cypress.Commands.add('isFirstChild', isFirstChild);
    Cypress.Commands.add('isFocused', isFocused);
    Cypress.Commands.add('hasSelector', hasSelector);
    Cypress.Commands.add('isHeader', isHeader);
    Cypress.Commands.add('isHidden', isHidden);
    Cypress.Commands.add('isImage', isImage);
    Cypress.Commands.add('isInput', isInput);
    Cypress.Commands.add('isAnimated', isAnimated);
    Cypress.Commands.add('isButton', isButton);
    Cypress.Commands.add('isLanguage', isLanguage);
    Cypress.Commands.add('isLast', isLast);
    Cypress.Commands.add('isLastChild', isLastChild);
    Cypress.Commands.add('isLastOfType', isLastOfType);
    Cypress.Commands.add('isNot', isNot);
    Cypress.Commands.add('isParent', isParent);
    Cypress.Commands.add('isPassword', isPassword);
    Cypress.Commands.add('isRadio', isRadio);
    Cypress.Commands.add('isReset', isReset);
    Cypress.Commands.add('isRoot', isRoot);
    Cypress.Commands.add('isSelected', isSelected);
    Cypress.Commands.add('isSubmit', isSubmit);
    Cypress.Commands.add('isText', isText);    
};
    