import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    const potions = this.props.potions;
    const spells = this.props.spells;

    console.log("Potions: ", potions, "Spells :", spells);
    return <div className="menu"></div>;
  }
}

export default Menu;
