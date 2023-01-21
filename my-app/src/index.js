import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const Title = (
    <h3 id = "title" onMouseEnter={() => console.log("hihihihi")}> hi </h3>
)
