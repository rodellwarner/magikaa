import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Spell.css";

class Spell extends Component {
  render() {
    return (
      <Link to={`/spell/${this.props.spell.id}`} className="spell">
        {this.props.spell.name}
      </Link>
    );
  }
}

export default Spell;
