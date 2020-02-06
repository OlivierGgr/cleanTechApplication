import CardFlip from './components/cardFlip/CardFlip.js'
import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Cleantech Application </h3>
        <FormContainer />
        <CardFlip/>
      </div>
    );
  }
}

export default App;
