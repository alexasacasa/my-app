import React, { Component } from 'react';
import Button from './Button';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    console.log('Hola pero en la consola');

    return (
      <div className="App" id={this.props.id}>
        <Button cetav="hola cetav"></Button>
        <Button title="hola">
          <h1>Hola</h1>
        </Button>
        <Button meme="hello">
          <p>Quiero un helado</p>
        </Button>
        <h1 cetav="title">Esto es otra prueba</h1>
        <a href="meme">meme</a>
      </div>
    );
  }
}

export default App;
