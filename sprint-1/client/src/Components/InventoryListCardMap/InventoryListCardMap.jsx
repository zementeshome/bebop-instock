import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import './InventoryList.scss';

function InventoryListCardMap (props) {
    //console.log('you are here 010101', props) // data passing correctly
    // styling broken
    return (
        <section className="inventory">
              <span className="inventory__line"></span>
          <div className="inventory__content-container">
              <div className="inventory__left-container">
              <h3 className="inventory__sub-heading">INVENTORY ITEM</h3>
            <Link to={`/inventories/${props.id}`}><p className="inventory__item">{props.itemName}</p></Link>
            <img className="inventory__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
            <h3 className="inventory__sub-heading">CATEGORY</h3>
            <p className="inventory__category">{props.category}</p>
            </div>
            <div className="inventory__right-container">
              <h3 className="inventory__sub-heading">STATUS</h3>
              <p className="inventory__status">{props.status}</p>
              <h3 className="inventory__sub-heading">QTY</h3>
            <p className="inventory__quantity">{props.quantity}</p>
            <h3 className="inventory__sub-heading">WAREHOUSE</h3>
            <p className="inventory__warehouse">{props.warehouseName}</p>
          </div>
          </div>
          <span className="inventory__underline-tablet"></span>
          <div className="inventory__icon-container">
          <img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
            <Link to="/editinventoryitem"><img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/></Link>
            </div>
          </section>
    )
}

export default InventoryListCardMap;
