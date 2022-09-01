<h1> Array functions </h1>

<p>usual JS array functions which are combined in Cypress</p>


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

<h2> Map function </h2>

<h3> What is map function ?</h3>
<p> Now when you get Cypress Chainable elements</p>
<p>you can use a map function, </p>
<p>exactly as you do in a normal JS array</p>


``` javascript
        import { initCypressWithArrays } from 'cypress-extender';
        initCypressWithArrays();

        cy.get('li').map(e => e.text().trim()).then(texts => {
            cy.log('Texts are: ', texts);
        });
```


<h2> Reduce function </h2>

<h3> What is reduce function ?</h3>
<p> Now when you get Cypress Chainable elements</p>
<p>you can use a reduce function, </p>
<p>exactly as you do in a normal JS array</p>


``` javascript
        import { initCypressWithArrays } from 'cypress-extender';
        initCypressWithArrays();

    it('test array reduce with array', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc.push(val[0]);
            return acc;
        }, []).should('have.length.gt', 0);
    });

    it('test array reduce with string', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc += val[0] || '';
            return acc;
        }, '').should('have.length.gt', 0);
    });

    it('test array reduce with number', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => acc += val.length, 0)
        .should('be.gt', 0);
    });
```



<h2> Every function </h2>

<h3> What is every function ?</h3>

<p> Now when you get Cypress Chainable elements</p>
<p>you can use an every function, </p>
<p>exactly as you do in a normal JS every</p>

<p> which checks that a callback function's result</p>
<p> on each element is true</p>

Use: 


``` javascript
import { initCypressWithArrays } from 'cypress-extender';
initCypressWithArrays();

it('test that every from the prevSubjet is a string', () => {
    cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
});

```


<h2> Join function </h2>

<h3> What is join function ?</h3>

<p> When you get Cypress Chainable elements with string values</p>
<p>you can use an join function, </p>
<p>exactly as you do in a normal JS join</p>

<p> which returns a joined string from the array of strings</p>
<p><b>NOTICE: </b> when you use chainable which is not a strings array, the joined value will be ''</p>

Use: 


``` javascript
import { initCypressWithArrays } from 'cypress-extender';
initCypressWithArrays();

it('test join texts are given', () => {
    cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
});


```
