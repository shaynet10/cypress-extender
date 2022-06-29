<h1> Log functions </h1> 

<h3> What are log function ? </h3>
<p> It is a new way to write text/data to your live report created by Cypress </p>
<p> for example: </p>
<p> If I don't like to search in the entire report scrolling up and down </p>
<p> to find that specific log message that represents what I'm searching for <p>
<p> this is exactly where log messages do that work for me <p>


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
        import { INFO } from 'cypress-extender';
        INFO("hi how are you");
```

Or Use:

``` javascript
        import { initCypressWithLogger } from 'cypress-extender';
        initCypressWithLogger();

        cy.Info("hi how are you");
```

Which will display a nice INFO line in you report (instead of the old log line).

Such as:

[INFO example](public/images/infoExample.jpeg)


<h2>Supported log functions </h2>

<table>
    <thead>
        <th>function</th>
        <th>what is it</th>
    </tead>
    <tbody>
        <tr>
            <td>Info</td>
            <td>displays INFO message in the Cypress report</td>
        </tr>
        <tr>
            <td>INFO</td>
            <td>displays INFO message in the Cypress report</td>
        </tr>
        <tr>
            <td>Message</td>
            <td>displays MESSAGE message in the Cypress report</td>
        </tr>
        <tr>
            <td>MESSAGE</td>
            <td>displays MESSAGE message in the Cypress report</td>
        </tr>
        <tr>
            <td>Debug</td>
            <td>displays DEBUG message in the Cypress report</td>
        </tr>
        <tr>
            <td>DEBUG</td>
            <td>displays DEBUG message in the Cypress report</td>
        </tr>
        <tr>
            <td>Warn</td>
            <td>displays WARN message in the Cypress report</td>
        </tr>
        <tr>
            <td>WARN</td>
            <td>displays WARN message in the Cypress report</td>
        </tr>
        <tr>
            <td>Custom</td>
            <td>Allows you to decide what message you want to be printed in the report</td>
        </tr>
        <tr>
            <td>CUSTOM</td>
            <td>Allows you to decide what message you want to be printed in the report</td>
        </tr>
    </tbody>
</table>

<h3>
Example to the custom command
</h3>

```javascript

        import { CUSTOM } from 'cypress-extender';
        CUSTOM("YourFuncName", "My data is", someDataObjectOrArray);

```
    
