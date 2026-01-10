import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function MyForm() {
    const [textarea, setTextarea] =useState(
        "WOW! A text area. "
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);


function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Audi">Volvo</option>
                <option value="Mercedes">Fiat</option>
            </select>
        </form>
    )

}

const root1= React.createRoot(document.getElementById('root'));
root.render(<MyForm/>);


