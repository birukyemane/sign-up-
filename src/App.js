import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> Nord Software          
        </header>

        <div className="Content-holder">
          <p className="App-intro">
            List of participants
          </p>

          <p className="Form-class">
            Here comes the form component to add new participants.            
          </p>
          <p className="Table-class">
            And a table component to show the list. it should allow to edit the cells and delete rows.
          </p>
        </div>
        
      </div>
    );
  }
}

export default App;
