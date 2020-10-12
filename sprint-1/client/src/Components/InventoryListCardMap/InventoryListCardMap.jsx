import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../InventoryList/InventoryList.scss';

function InventoryListCardMap (props) {
    const status = props.status
    let stock;
    if (status === 'In Stock') {
    stock = <p className="inventoryList__status-instock">{props.status}</p>
    } else {
        stock = <p className="inventoryList__status-outstock">{props.status}</p>
    }

    
    return (
        <section className="inventoryList">
              <span className="inventoryList__line"></span>
          <div className="inventoryList__content-container">
              <div className="inventoryList__left-container">
              <h3 className="inventoryList__sub-heading">INVENTORY ITEM</h3>
            <Link to={`/inventories/${props.id}`}><p className="inventoryList__item">{props.itemName}</p></Link>
            <img className="inventoryList__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
            <h3 className="inventoryList__sub-heading">CATEGORY</h3>
            <div className="inventoryList__category-container"  >

            <p className="inventoryList__category">{props.category}</p>

            </div>
            </div>
            <div className="inventoryList__right-container">
              <h3 className="inventoryList__sub-heading">STATUS</h3>
              {stock}
              <h3 className="inventoryList__sub-heading">QTY</h3>
            <p className="inventoryList__quantity">{props.quantity}</p>
            <h3 className="inventoryList__sub-heading">WAREHOUSE</h3>
            <p className="inventoryList__warehouse">{props.warehouseName}</p>
          </div>
          </div>
          <span className="inventoryList__underline-tablet"></span>
          <div className="inventoryList__icon-container">
          <img className="inventoryList__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
            <Link to="/editinventoryitem"><img className="inventoryList__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/></Link>
            </div>
          </section>
    )
}

export default InventoryListCardMap;
