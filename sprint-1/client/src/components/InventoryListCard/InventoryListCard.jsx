// import React, { Component } from './node_modules/react'
import React, { Component } from 'react';

class InventoryListCard extends Component {
    render() {
        return (
            <section className="inventory">
                  <span className="inventory__line"></span>
             <div className="inventory__content-container">
                 <div className="inventory__left-container">
                 <h3 className="inventory__sub-heading">INVENTORY ITEM</h3>
                <p className="inventory__item">{this.props.itemName}</p>
                <img className="inventory__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
                <h3 className="inventory__sub-heading">CATEGORY</h3>
                <p className="inventory__category">{this.props.category}</p>
                </div>
                <div className="inventory__right-container">
                 <h3 className="inventory__sub-heading">STATUS</h3>
                 <p className="inventory__status">{this.props.status}</p>
                 <h3 className="inventory__sub-heading">QTY</h3>
                <p className="inventory__quantity">{this.props.quantity}</p>
                <h3 className="inventory__sub-heading">WAREHOUSE</h3>
                <p className="inventory__warehouse">{this.props.warehouseName}</p>
             </div>
             </div>
             <span className="inventory__underline-tablet"></span>
             <div className="inventory__icon-container">
             <img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
                <img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/>
                </div>
             </section>
        )
    }
}

export default InventoryListCard;
