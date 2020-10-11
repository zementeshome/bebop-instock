import React from "react";
import { Link } from 'react-router-dom';
import Arrow from "../../assets/icons/arrow-back24px.svg"
import Edit from "../../assets/icons/editWhite24px.svg"
import Header from '../Header/Header';
import "./warehouseInventoryItemDetails.scss"

export default function warehouseInventoryItemDetails() {
  return (
    <>
    <Header/>
    <div className="warehouseInventory">
      <div className="warehouseInventory__header">
        <h2 className="warehouseInventory__title">
          
          <Link to="/inventories"><img
            className="warehouseInventory__arrow"
            src={Arrow}
            alt=""
          /></Link>
          Television
        </h2>
        <button className="warehouseInventory__btn">
          <Link className="warehouseInventory__link"  to="/editwarehouseInventoryitem"><img
            className="warehouseInventory__edit-icon"
            src={Edit}
            alt=""
          /></Link>
          <span className="warehouseInventory__btn-edit-title">Edit</span>
        </button>
      </div>
      <div className="warehouseInventory__details">
        <div className="warehouseInventory__item">
          <h4 className="warehouseInventory__description-title">ITEM DESCRIPTION:</h4>
          <p className="warehouseInventory__description">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h4 className="warehouseInventory__category">CATEGORY:</h4>
          <p className="warehouseInventory__category-item">Electronics</p>
        </div>
        <div className="warehouseInventory__line"></div>
        <div className="warehouseInventory__stock">
          <div className="warehouseInventory__status">
            <h4 className="warehouseInventory__status-title">STATUS:</h4>
            <div className="warehouseInventory__status-title-focus">
              <p className="warehouseInventory__status-title-details">IN STOCK</p>
            </div>
          </div>
          <div className="warehouseInventory__quantity">
            <h4 className="warehouseInventory__quantity-title">QUANTITY:</h4>
            <p className="warehouseInventory__quantity-amount">500</p>
          </div>
          <div className="warehouseInventory__warehouse">
            <h4 className="warehouseInventory__warehouse-title">WAREHOUSE:</h4>
            <p className="warehouseInventory__warehouse-location">Manhattan</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
