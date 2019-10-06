import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; 
import Register from './Components/Register';
import Login from './Components/Login';
import REgister1 from './Components/REgister1';


Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <REgister1 />

      </div>
    );
  }
}

export default App;
