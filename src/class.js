import React from 'react';
import ReactDOM from 'react-dom/client';


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "blue",
            year:2010
        };
    }
}
changeColor = () => {
    this.setState({color: "red"});
}
render()
  return (
    <div>
      <h1>Car Company: {this.state.brand}</h1>
      <p>
        It is a {this.state.color} {this.state.model} from {this.state.year}.
      </p>
      <button type="button" onClick="{this.changeColor}">Change color</button>
    </div>
  );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />)