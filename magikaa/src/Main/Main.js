import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Menu potions={this.props.potions} spells={this.props.spells} />
      </div>
    );
  }
}

export default Main;
