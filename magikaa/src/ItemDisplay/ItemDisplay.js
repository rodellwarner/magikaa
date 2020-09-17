import React, { Component } from "react";
import "./ItemDisplay.css";

class ItemDisplay extends Component {
  render() {
    const itemId = this.props.itemId;
    const itemIdValue = Object.values(itemId);
    const groupOfItems = this.props.groupOfItems;

    const selectedItem = groupOfItems.filter(
      (item) => item.id === itemIdValue[0]
    );

    console.log("Group of Items: ", groupOfItems);
    console.log("Item Id : ", itemId);
    console.log("Item Id value: ", itemIdValue);

    console.log("Selected Item :", selectedItem);

    return (
      <div className="itemDisplay">
        <p>Effect: {selectedItem[0].effect}</p>
        <p>Energy Cost: {selectedItem[0].energyCost}</p>
        {!!selectedItem[0].duration && (
          <p>Duration: {selectedItem[0].duration}</p>
        )}
        {!!selectedItem[0].incantation && (
          <p>Incantation: {selectedItem[0].incantation}</p>
        )}
      </div>
    );
  }
}

export default ItemDisplay;
