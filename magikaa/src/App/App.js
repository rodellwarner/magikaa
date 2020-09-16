import React, { Component } from "react";
import { Route } from "react-router-dom";
import MAGIKA from "../MAGIKA";
import Main from "../Main/Main";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { potions: MAGIKA.Potions, spells: MAGIKA.Spells };
  }

  render() {
    return (
      <Route
        exact
        path="/"
        render={(props) => (
          <Main
            {...props}
            spells={this.state.spells}
            potions={this.state.potions}
          />
        )}
      />
    );
  }
}

export default App;
