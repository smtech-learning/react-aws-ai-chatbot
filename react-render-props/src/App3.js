import React, { useState, useContext } from "react";
import Data from "./Data.js";
import { Context } from "./ContextProvider";

export default function App3() {
  const [product, setProduct] = useState("");

  const response = Data.map(data => <h1> {data.product}</h1>);

  const filteredData = Data.filter(d => d.product.includes(product));

  function handlethis(e) {
    setProduct(e.target.value);
  }

  const { displayValue } = useContext(Context);

  return (
    <div>
      <h1> Tesing</h1>
      <h1> {displayValue}</h1>
      <input type='text' name='fname' onChange={handlethis} />
      {filteredData.map(d => (
        <h2> {d.product}</h2>
      ))}
    </div>
  );
}
