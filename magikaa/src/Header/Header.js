import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="header">
          *~ MAGIKA SUPPLY{" "}
          <sup>
            <u>co.</u>
          </sup>
          ~*
        </h1>
      </header>
    );
  }
}

export default Header;
