import React from "react";

export default function ShowImage({ imagelocation }) {
  const myStyle = {
    bordeRadius: "50px"
  };
  return (
    <div>
      <img src={imagelocation} alt='' style={myStyle}></img>
    </div>
  );
}
