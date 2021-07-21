import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./card";

function logClick() {
  console.log("test click");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card kind="Link" href="https://google.com"></Card>
        <Card kind="Button" onClick={logClick}></Card>
      </header>
    </div>
  );
}

export default App;
