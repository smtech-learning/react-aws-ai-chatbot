import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";

const App2 = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/services'> Services</Link>
      <Link to='/products'> Products</Link>

      <Route exact path='/'>
        {" "}
        <Home />{" "}
      </Route>
      <Route path='/services'>
        {" "}
        <Services />
      </Route>
      <Route path='/products'>
        {" "}
        <Products />
      </Route>
    </div>
  );
};

export default App2;
