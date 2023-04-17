import React from "react";

const Print = (props) => {
  return (
    <>
      <p>{props.id}</p>
      <h1>{props.name}</h1>
      <h2>{props.course}</h2>
      <img src={props.imgsrc} alt="pic" />
    </>
  );
};

export default Print;
