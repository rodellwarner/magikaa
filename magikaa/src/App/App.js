import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MAGIKA from "../MAGIKA";
import Main from "../Main/Main";
import PageDoesNotExist from "../PageDoesNotExist/PageDoesNotExist";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { potions: MAGIKA.Potions, spells: MAGIKA.Spells };
  }

  render() {
    return (
      <Switch>
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
        ></Route>
        <Route component={PageDoesNotExist} />
      </Switch>
    );
  }
}

export default App;
