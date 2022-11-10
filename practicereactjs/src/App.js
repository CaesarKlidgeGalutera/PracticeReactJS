import React, { useState } from "react";

import Card from "./Card";
import "./style.css";
const App = () => {
  const [counter, setCount] = useState(0);

  const programmerName = "Klidge";

  const [getStr, setStr] = useState();

  const onClickHandler = () => {
    setCount(counter + 1);
  };

  const handleGetStr = (input) => {
    setStr(input.target.value);
  };

  return (
    //returning an html should only be in a one element
    <div className="app-main">
      <Card />
    </div>
  ); // concatenating a varibale in an html should be enclosed with {}
};

export default App;
