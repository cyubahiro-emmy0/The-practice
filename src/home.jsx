import React from 'react';
import ReactDOM from 'react-dom/client';

const myelement = (
    <>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
    </>
);

ReactDOM.createRoot(document.getElementById('root')). render(myelement);

const myElement = <h1>React is {5 + 5} times with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementaryById('root'));
root.render(myElement);

const mylement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);

const root1=React.DOM.createRoot(document.getElementById('root'));
root.render(mylement);


