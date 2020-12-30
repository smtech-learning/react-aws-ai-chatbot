import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

export default function Products() {
  const display = Data.map(data => {
    return (
      <div id={data.id}>
        <h3>
          <Link to={`/products/${data.id}`}> {data.product}</Link>
        </h3>
        <h3> {data.price}</h3>
        <hr />
      </div>
    );
  });
  return <div>{display}</div>;
}
