import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Datafetcher from "./Datafetcher";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Datafetcher>
          {(name, data) => {
            return <h1> the name is {name}</h1>;
          }}
        </Datafetcher>
      </header>
    </div>
  );
}

export default App;
