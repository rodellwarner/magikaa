import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Potion.css";

class Potion extends Component {
  render() {
    return (
      <Link to={`/potion/${this.props.potion.id}`}>
        {this.props.potion.name}
      </Link>
    );
  }
}

export default Potion;
