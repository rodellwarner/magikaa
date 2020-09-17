import React, { Component } from "react";
import "./Menu.css";
import Potion from "../Potion/Potion";
import Spell from "../Spell/Spell";

class Menu extends Component {
  render() {
    const potions = this.props.potions;
    const spells = this.props.spells;

    const listOfPotions = potions.map((potion, index) => {
      return (
        <li key={index} className="listItem">
          <Potion potion={potion} />
        </li>
      );
    });

    const listOfSpells = spells.map((spell, index) => {
      return (
        <li key={index} className="listItem">
          <Spell spell={spell} />
        </li>
      );
    });
    return (
      <div className="menu">
        Potions:<br></br>
        {listOfPotions}
        Spells:<br></br>
        {listOfSpells}
      </div>
    );
  }
}

export default Menu;
