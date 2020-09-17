import React, { Component } from "react";
import "./MenuWithHighlights.css";
import Potion from "../Potion/Potion";
import Spell from "../Spell/Spell";

class MenuWithHighlights extends Component {
  render() {
    const potions = this.props.potions;
    const spells = this.props.spells;
    const itemIdValue = this.props.itemIdValue;

    const listOfPotions = potions.map((potion, index) => {
      if (potion.id === itemIdValue) {
        return (
          <li key={index} className="highlighted">
            <Potion potion={potion} />
          </li>
        );
      } else {
        return (
          <li key={index} className="listItem">
            <Potion potion={potion} />
          </li>
        );
      }
    });

    const listOfSpells = spells.map((spell, index) => {
      if (spell.id === itemIdValue) {
        return (
          <li key={index} className="highlighted">
            <Spell spell={spell} />
          </li>
        );
      } else {
        return (
          <li key={index} className="listItem">
            <Spell spell={spell} />
          </li>
        );
      }
    });
    return (
      <div className="menuWithHighlights">
        <b>Potions:</b>
        <br></br>
        {listOfPotions}
        <b>Spells:</b>
        <br></br>
        {listOfSpells}
      </div>
    );
  }
}

export default MenuWithHighlights;
