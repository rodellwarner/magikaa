import React, { Component } from "react";
import "./PageDoesNotExist.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

class PageDoesNotExist extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="pageDoesNotExist">
          This Page Does Not Exist!<br></br>
          <p>
            <Link to="/">
              <u>Go Home</u>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default PageDoesNotExist;
