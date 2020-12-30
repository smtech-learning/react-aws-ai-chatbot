import React, { useState } from "react";
const Context = React.createContext();
// import Data from "./Data.js";

function ContextProvider(props) {
  const [name, setName] = useState("Suresh Munnangi");

  return <Context.Provider value={name}>{props.children}</Context.Provider>;
}

export { ContextProvider, Context };
