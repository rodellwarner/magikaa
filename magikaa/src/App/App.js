import React, { Component } from "react";
// import { Route } from "react-router-dom";
import MAGIKA from "../MAGIKA";
import Header from "../Header/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { potions: MAGIKA.Potions, spells: MAGIKA.Spells };
  }

  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
