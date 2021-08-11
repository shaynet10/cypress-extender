const found = (selector) => Cypress.$(selector).length > 0;

Cypress.Commands.add('exists', (selector) => found(selector));
Cypress.Commands.add('isVisible', (selector) => found(`${selector}:visible`));
Cypress.Commands.add('isCheckbox', (selector) => found(`${selector}:checkbox`));
Cypress.Commands.add('isChecked', (selector) => found(`${selector}:checked`));
Cypress.Commands.add('hasText', (selector, text) => found(`${selector}:contains(${text})`));
Cypress.Commands.add('equals', (selector, text) => found(`${selector}:eq(${text})`));
Cypress.Commands.add('isEmpty', (selector) => found(`${selector}:empty)`));
Cypress.Commands.add('hasNoChildren', (selector, text) => found(`${selector}:empty)`));
Cypress.Commands.add('isDisabled', (selector) => found(`${selector}:disabled`));
Cypress.Commands.add('isEnabled', (selector) => found(`${selector}:enabled`));
Cypress.Commands.add('isFile', (selector) => found(`${selector}:file`));
Cypress.Commands.add('isFirstChild', (selector) => found(`${selector}:first-child`));
Cypress.Commands.add('isFocused', (selector) => found(`${selector}:focus`));
Cypress.Commands.add('hasSelector', (selector, innerSelector) => found(`${selector}:has(${innerSelector})`));
Cypress.Commands.add('isHeader', (selector) => found(`${selector}:header`));
Cypress.Commands.add('isHidden', (selector) => found(`${selector}:hidden`));
Cypress.Commands.add('isImage', (selector) => found(`${selector}:image`));
Cypress.Commands.add('isInput', (selector) => found(`${selector}:input`));
Cypress.Commands.add('isAnimated', (selector) => found(`${selector}:animated`));
Cypress.Commands.add('isButton', (selector) => found(`${selector}:button`));
Cypress.Commands.add('isLanguage', (selector) => found(`${selector}:language`));
Cypress.Commands.add('isLast', (selector) => found(`${selector}:last`));
Cypress.Commands.add('isLastChild', (selector) => found(`${selector}:last-child`));
Cypress.Commands.add('isLastOfType', (selector) => found(`${selector}:last-of-type`));
Cypress.Commands.add('isNot', (selector, notSelector) => found(`${selector}:not(${notSelector})`));
Cypress.Commands.add('isParent', (selector) => found(`${selector}:parent`));
Cypress.Commands.add('isPassword', (selector) => found(`${selector}:password`));
Cypress.Commands.add('isRadio', (selector) => found(`${selector}:radio`));
Cypress.Commands.add('isReset', (selector) => found(`${selector}:reset`));
Cypress.Commands.add('isRoot', (selector) => found(`${selector}:root`));
Cypress.Commands.add('isSelected', (selector) => found(`${selector}:selected`));
Cypress.Commands.add('isSubmit', (selector) => found(`${selector}:submit`));
Cypress.Commands.add('isText', (selector) => found(`${selector}:text`));


