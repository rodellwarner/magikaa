import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    const potions = this.props.potions;
    const spells = this.props.spells;

    console.log("Potions: ", potions, "Spells :", spells);

    const listOfPotions = potions.map((potion, index) => {
      return (
        <li key={index} className="listItem">
          <Link to={`potion/${potion.id}`} className="menuItem">
            {potion.name}
          </Link>
        </li>
      );
    });

    const listOfSpells = spells.map((spell, index) => {
      return (
        <li key={index} className="listItem">
          <Link to={`spell/${spell.id}`} className="menuItem">
            {spell.name}
          </Link>
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
