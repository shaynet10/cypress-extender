<h1> Array functions </h1>

<p>usual JS array functions which are combined in Cypress</p>

<h2> Map function </h2>

<h3> What is map function ?</h3>
<p> Now when you get Cypress Chainable elements</p>
<p>you can use a map function, </p>
<p>exactly as you do in a normal JS array</p>


<h3> Installation </h3>
<p>To install the plugin to your project please use:</p>

```javascript
npm install cypress-extender
```
<p>
in order to also add it to your package.json file so you can use:</p>

```
npm install --save-prod cypress-extender
```

<h3>Manual</h3>

Once cypress-extender is installed you can use:


``` javascript
        import { initCypressWithArrays } from 'cypress-extender';
        initCypressWithArrays();

        cy.get('li').map(e => e.text().trim()).then(texts => {
            cy.log('Texts are: ', texts);
        });
```



<h2> Every function </h2>

<h3> What is every function ?</h3>

<p> Now when you get Cypress Chainable elements</p>
<p>you can use a every function, </p>
<p>exactly as you do in a normal JS every</p>

<p> which checks that a callback function's result</p>
<p> on each element is true</p>

Use: 


``` javascript
import { initCypressWithArrays } from 'cypress-extender';
initCypressWithArrays();

it('test every prevSubjet is array', () => {
    cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
});

```
