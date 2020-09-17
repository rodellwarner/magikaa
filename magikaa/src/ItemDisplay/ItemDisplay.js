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

    return (
      <div className="itemDisplay">
        <p>
          <b>Effect:</b> {selectedItem[0].effect}
        </p>
        <p>
          <b>Energy Cost:</b> {selectedItem[0].energyCost}
        </p>
        {!!selectedItem[0].duration && (
          <p>
            <b>Duration:</b> {selectedItem[0].duration}
          </p>
        )}
        {!!selectedItem[0].incantation && (
          <p>
            <b>Incantation:</b> {selectedItem[0].incantation}
          </p>
        )}
      </div>
    );
  }
}

export default ItemDisplay;
