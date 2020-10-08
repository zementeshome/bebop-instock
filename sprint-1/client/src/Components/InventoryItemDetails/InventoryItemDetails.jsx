import React from "react";
import "./inventoryItemDetails.scss";

export default function InventoryItemDetails() {
  return (
    <div className="inventory">
      <div className="inventory__header">
        <h2 className="inventory__title">
          {" "}
          <img
            className="inventory__arrow"
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt=""
          />{" "}
          Television
        </h2>
        {/* TODO: Add LINK */}
        <button className="inventory__btn">
          <img
            className="inventory__edit-icon"
            src={process.env.PUBLIC_URL + "./assets/icons/editWhite24px.svg"}
            alt=""
          />
          <span className="inventory__btn-edit-title">Edit</span>
        </button>
      </div>
      <div className="inventory__details">
        <div className="inventory__item">
          <h4 className="inventory__description-title">ITEM DESCRIPTION:</h4>
          <p className="inventory__description">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h4 className="inventory__category">CATEGORY:</h4>
          <p className="inventory__category-item">Electronics</p>
        </div>
        <div className="inventory__line"></div>
        <div className="inventory__stock">
          <div className="inventory__status">
            <h4 className="inventory__status-title">STATUS:</h4>
            <div className="inventory__status-title-focus">
              <p className="inventory__status-title-details">IN STOCK</p>
            </div>
          </div>
          <div className="inventory__quantity">
            <h4 className="inventory__quantity-title">QUANTITY:</h4>
            <p className="inventory__quantity-amount">500</p>
          </div>
          <div className="inventory__warehouse">
            <h4 className="inventory__warehouse-title">WAREHOUSE:</h4>
            <p className="inventory__warehouse-location">Manhattan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
