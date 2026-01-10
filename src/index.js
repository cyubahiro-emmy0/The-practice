import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/NoPage";
import  Todos from "./todos";
import { useState } from "react";
import Car from './car.js';

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

const myElement = <h1 className="myclasss">Hello World</h1>;

const root1 = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

class Car extends React.Component {
    render() {
        return <h2>Car Function!</h2>
    }
};


function Car(props) {
    return <h2>{props.color} Car!</h2>;
}

function Garage() {
    return (
        <>
          <h1>What's in my Garage?</h1>
          <Car />
        </>
    );
}

