import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu.js';
import About from './Components/About';
import Help from './Components/Help';
import Sale from './Components/Sale';
import Inventory from './Components/Inventory';
import NotFound from './Components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div className="App"> 
        <header className="App-header">
         <Menu />
          </header>
          <Switch>  
            <Route path="/" exact render={() => {return (<h1> Plese select the menu item above</h1>)}} />
               <Route path="/inventory"  exact component={Inventory} />
                <Route path="/about"  exact  component={About} />
                <Route path="/sale"  exact  component={Sale} />
                <Route path="/help" exact component={Help} />
                <Route path="" component={NotFound} />
            </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
