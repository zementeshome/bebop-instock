// import React, { Component } from './node_modules/react'
import React, { Component } from 'react';

class InventoryListCard extends Component {
    render() {
        const status = this.props.status;
        let stock;
        if (status === 'In Stock') {
        stock = <p className="inventoryList__status-instock">{this.props.status}</p>
        } else {
            stock = <p className="inventoryList__status-outstock">{this.props.status}</p>
        }
        return (
            <section className="inventoryList">
                  <span className="inventoryList__line"></span>
             <div className="inventoryList__content-container">
               <div className="inventoryList__left-container">
                 <h3 className="inventoryList__sub-heading">INVENTORY ITEM</h3>
                 <div className="inventoryList__item-container">
                <p className="inventoryList__item">{this.props.itemName}</p>
                <img className="inventoryList__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
            </div>
                <h3 className="inventoryList__sub-heading">CATEGORY</h3>
                <p className="inventoryList__category">{this.props.category}</p>
            </div>
                <div className="inventoryList__right-container">
                 <h3 className="inventoryList__sub-heading">STATUS</h3>
                 {stock}
                <h3 className="inventoryList__sub-heading">QTY</h3>
                <p className="inventoryList__quantity">{this.props.quantity}</p>
                <h3 className="inventoryList__sub-heading">WAREHOUSE</h3>
                <p className="inventoryList__warehouse">{this.props.warehouseName}</p>
            </div>
        </div>
             <span className="inventoryList__underline-tablet"></span>
        <div className="inventoryList__icon-container">
             <img className="inventoryList__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
                <img className="inventoryList__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/>
            </div>
    </section>
        )
    }
}

export default InventoryListCard;
