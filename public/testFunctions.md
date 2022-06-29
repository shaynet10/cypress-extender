<h1>Test functions</h1>

<h3>Why is it needed</h3>
<p>Let's suppose that we have an element that appears <b>ONLY</b> after a specific event</p>  
<p>In a usual <a href="https://docs.cypress.io/api/commands/get"> cy.get </a> approach, </p>
<p>our test will fail (or even worse will be flaky) depending if that event happend/didn't happen before we searched for the element
</p>
<p>i.e. open dropdown and wait for inner element to be created there, to identify, it's opened
</p>
<p> With Cypress Extender it's possible, in fact we can use an <b>if</b> ccondition, or <b>while</b> loop, to test condition of element</p>


<h2> Prerequisites </h2>
<p>In order to use this plugin:</p>
<p>
    <ul>
        <li>Cypress must be installed.</li>
    </ul>
</p>

<h2>Installation</h2>
<p>To install the plugin to your project please use:</p>

```javascript
npm install cypress-extender
```
<p>
in order to also add it to your package.json file so you can use:</p>

```
npm install --save-prod cypress-extender
```

<h2>Manual</h2>
<p>
Once Cypress Extender is installed, </p>
<p>there are 2 main options to use this plugin
    <ul>
        <li>initCypress - adds this plugin's commands to cypress</li>
        <li>load and use specific function - doesn't change anything in cypress commands</li>
    </ul>
</p>

<h2>initCypress</h2>
<p> in order to load all the extender commands to cypress use:</p>

```javascript
const { initCypress } = require('cypress-extender');
initCypress();
```

or alternativly:

```javascript
import { initCypress } from 'cypress-extender';
initCypress();
```

in both ways, you'll get many new functions added to cypress, such as:

```javascript

        cy.exists('body').should('be.true');
        cy.exists('bodyy').should('be.false'); 
        cy.isVisible('body').should('be.true');
        cy.isVisible('bodyy').should('be.false'); 
        cy.hasText('body', 'default blank page').should('be.true');
        cy.hasText('body', 'default blanket page').should('be.false');        


```

and many more options, as you can find below, in this page.

<h2>Load required function</h2>
If you decide, that you don't want to change anything in cypress commands, however you want to test boolean cases in <b>if</b> statement, or wait for a condition in a <b>while</b> loop, this is probably the better option for you.

in order to load specific function, use:

```javascript
const { exists } = require('cypress-extender');
```

or alternativly:

```javascript
import { exists } from 'cypress-extender';
```

in both ways you'll be able to test things like:

```javascript
if (exists('body')) { /* DO SOMETHING */ }
while (exists('body')) { /* DO SOMETHING */ }
for (let i = 0; i <  SOME_MAX_TRIES && exists('body'); i++ ) {
    /* DO SOMETHING */
}
```

so you'll be able for example to implement something like

```javascript
const isOpened = () => exists(' SELECTOR THAT APPEARS WHEN OPENED');
const openDropDown = !isOpened() && cy.get('SOME SELECTOR TO OPEN').click();

```

Also here we support <b>visible</b> in a differnt way, than the usual cy.get('SELECTOR').should('be.visible');

what if, for example you want to wait for element to exist and to be visible, now you can.
Simply use something like:

```javascript
import { isVisible } from 'cypress-extender';
while (isVisible('SELECTOR OF ELEMENT')) {
    /* DO SOMETHING */
}

```

very simple to use, and should make cypress code much easier to use.

<h2> Supported functions </h2> 
<p>
    <table>
        <thead>
            <th>function</th>
            <th>what is it</th>
        </tead>
        <tbody>
        <tr>
            <td>exists</td>
            <td>element should exist, in DOM</td>
        </tr>
        <tr>
            <td>isVisible</td>
            <td>exists in DOM and visible</td>
        </tr>
        <tr>
            <td>isCheckbox</td>
            <td>element exists and is a checkbox</td>
        </tr>
        <tr>
            <td>isChecked</td>
            <td>element exists and is checked</td>
        </tr>
        <tr>
            <td>contains</td>
            <td>element exists and its text contains GIVEN TEXT, this function get 2 arguments 
            cssSelector, text
            </td>
        </tr>
        <tr>
            <td>equals</td>
            <td>element exists and its text equals to GIVEN TEXT, this function get 2 arguments 
            cssSelector, text(element should be equal to)
        </td>
        </tr>
        <tr>
            <td>isEmpty</td>
            <td>element exists and has no children
        </td>
        </tr>
        <tr>
            <td>hasNoChildren</td>
            <td>element exists and has no children
        </td>
        </tr>
        <tr>
            <td>isDisabled</td>
            <td>element exists and is disabled
        </td>
        </tr>
        <tr>
            <td>isEnabled</td>
            <td>element exists and is enabled (not disabled)
        </td>
        </tr>
        <tr>
            <td>isFile</td>
            <td>element exists and is of type file (mostly input[type=file])
        </td>
        </tr>
        <tr>
            <td>isFirstChild</td>
            <td>element exists and is the first child of its parent element
        </td>
        </tr>
        <tr>
            <td>isFocused</td>
            <td>element exists and is in focus state
        </td>
        </tr>
        <tr>
            <td>hasSelector</td>
            <td>element exists and has among its descendants element that matches the css selector
        </td>
        </tr>
        <tr>
            <td>isHeader</td>
            <td>element exists and is of type header (h1, h2, h5 ...)
        </td>
        </tr>
        <tr>
            <td>isHidden</td>
            <td>element exists and is hidden
        </td>
        </tr>
        <tr>
            <td>isImage</td>
            <td>element exists and is of type image
        </td>
        </tr>
        <tr>
            <td>isInput</td>
            <td>element exists and is of type input
        </td>
        </tr>
        <tr>
            <td>isAnimated</td>
            <td>element exists and is recognized as running some animation (by JQuery)
        </td>
        </tr>
        <tr>
            <td>isButton</td>
            <td>element exists and is of type button
        </td>
        </tr>
        </tbody>
    </table>
</p>