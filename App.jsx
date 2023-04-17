import React from "react";
import data from "./data";
import Print from "./Print";

const App = () => {
  function xyz(val) {
    return (
      <Print
        id={val.id}
        name={val.name}
        course={val.course}
        imgsrc={val.imgsrc}
      />
    );
  }

  return (
    <>
      {data.map(xyz)}

      {/* <Print 
      name={data[0].name} 
      id={data[0].id} 
      course={data[0].course} />
      <Print 
      name={data[1].name} 
      id={data[1].id} 
      course={data[1].course} /> */}
    </>
  );
};

export default App;
