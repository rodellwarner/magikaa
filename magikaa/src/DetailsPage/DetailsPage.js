import React, { Component } from "react";
import "./DetailsPage.css";
import Header from "../Header/Header";
import ItemDisplay from "../ItemDisplay/ItemDisplay";
import MenuWithHighlights from "../MenuWithHighlights/MenuWithHighlights";

class DetailsPage extends Component {
  render() {
    const itemId = this.props.match.params;
    const groupOfItems = this.props.groupOfItems;
    const itemIdValue = Object.values(itemId);
    const selectedMenuItem = groupOfItems.filter(
      (item) => item.id === itemIdValue[0]
    );

    // console.log("Selected Menu Item[0].id: ", selectedMenuItem[0].id);
    // console.log("Item Id Value[0] :", itemIdValue[0]);

    // function highlightItem(selectedMenuItem, itemIdValue) {
    //   if (selectedMenuItem[0].id === itemIdValue[0]) {
    //     return <Menu/>
    //   }
    // }

    return (
      <div className="detailsPage">
        <Header />
        <MenuWithHighlights
          potions={this.props.potions}
          spells={this.props.spells}
          selectedMenuItemId={selectedMenuItem[0].id}
          itemIdValue={itemIdValue[0]}
        />
        <ItemDisplay itemId={itemId} groupOfItems={groupOfItems} />
      </div>
    );
  }
}

export default DetailsPage;
