<h1> Array functions <h1>

<h2> Map function </h2>

<h3> What is map function ?</h3>
<p> map function is a simple way to run a callback function</p>
<p> on each element returned from the previous command</p>
<p> and return its results as an array</p>

Use: 


``` javascript
        import { initCypressWithArrays } from 'cypress-extender';
        initCypressWithArrays();

        cy.get('li').map(e => e.text().trim()).then(texts => {
            cy.log('Text are ', texts);
        });
```

Or any other jquery function combined/not combined with js code.


<h2> Every function </h2>

<h3> What is every function ?</h3>
<p> every function is a simple way to check that a callback function's result</p>
<p> on each element is true</p>
<p> Very close to how Array.every function works </p>

Use: 


``` javascript
        import { initCypressWithArrays } from 'cypress-extender';
        initCypressWithArrays();

        it('test every prevSubjet is array', () => {
            cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
        });

        it('test every prevSubjet is element', () => {
            cy.get('a').every(e => typeof e.text() === 'string').should('be.true');
        });

```
