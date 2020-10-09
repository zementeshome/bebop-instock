import React, { Component } from 'react'

class WarehouseDetailsCard extends Component {
    render() {
        const status = this.props.status;
        let stock;
        if (status === 'In Stock') {
        stock = <p className="warehouse__details-status-instock">{this.props.status}</p>
        } else {
            stock = <p className="warehouse__details-status-outstock">{this.props.status}</p>
        }
        return (
           <section className="warehouse__details">
                 <span className="warehouse__details-line"></span>
                 <div className="warehouse__details-content-container">
                 <div className="warehouse__details-left-container">
                 <h3 className="warehouse__details-subheading">INVENTORY ITEM</h3>
                 <div className="warehouse__details-inventory-container">
                <p className="warehouse__details-inventory">{this.props.itemName}</p>
                <img className="warehouse__details-arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
                </div>
                <h3 className="warehouse__details-subheading">CATEGORY</h3>
                <div className="warehouse__details-category-container">
                <p className="warehouse__details-category">{this.props.category}</p>
                </div>
                 </div>
                 <div className="warehouse__details-right-container">
                 <h3 className="warehouse__details-subheading">STATUS</h3>
                 {stock}
                {/* <p className="warehouse__details-status">{this.props.status}</p> */}
                 <h3 className="warehouse__details-subheading">QTY</h3>
                 <div className="warehouse__details-quantity-container">
                <p className="warehouse__details-quantity">{this.props.quantity}</p>
                </div>
             </div>
                 </div>
                 <span className="warehouse__details-line-tablet"></span>
             <div className="warehouse__details-icon-container">
             <img className="warehouse__details-delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
                <img className="warehouse__details-delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/>
                </div>
           </section>
        )
    }
}

export default WarehouseDetailsCard;
