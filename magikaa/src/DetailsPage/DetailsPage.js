import React, { Component } from "react";
import "./DetailsPage.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import ItemDisplay from "../ItemDisplay/ItemDisplay";

class DetailsPage extends Component {
  render() {
    const itemId = this.props.match.params;
    // console.log("Item Id: ", itemId);

    const groupOfItems = this.props.groupOfItems;

    return (
      <div className="detailsPage">
        <Header />
        <Menu potions={this.props.potions} spells={this.props.spells} />
        <ItemDisplay itemId={itemId} groupOfItems={groupOfItems} />
      </div>
    );
  }
}

export default DetailsPage;
