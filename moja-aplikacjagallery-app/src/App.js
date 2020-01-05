import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Images from './Images';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Images image='forest.jpg'/>
        <Images image='mountains.jpg'/>
        <Images image='desert.jpg'/>
        <Images image='beach.jpg'/>
      </div>
    );
  }
}

export default App;
