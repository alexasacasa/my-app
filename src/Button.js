import React, { Component } from 'react';
//import './Button.css';

class Button extends Component {
  render() {
    const divStyle = {
      margin: "40px",
      border: "solid 2px palevioletred",
      background: "pink"
    };

    console.log('otro hola en la consola')

    return (
      <div className="Button" style={divStyle}>
        {this.props.cetav}
        {this.props.meme}
        {this.props.children}
        {this.props.title}
        -Papita :3
      </div>
    );
  }
}

export default Button;