import React, { Component } from 'react'

class WarehouseDetailsCard extends Component {
    // get statusStyle() {
    //     let ColorValue = "#000000"
    //     if (this.props.status === 'In Stock') {
    //         ColorValue = "#158463"
    //     }
    //     return {
    //         color: ".warehouse__details-status"
    //     }
    // }
    render() {
        return (
           <section className="warehouse__details">
                 <span className="warehouse__details-line"></span>
                 <div className="warehouse__details-content-container">
                 <div className="warehouse__details-left-container">
                 <h3 className="warehouse__details-subheading">INVENTORY ITEM</h3>
                <p className="warehouse__details-inventory">{this.props.itemName}</p>
                {/* <img className="warehouse__details-arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/> */}
                <h3 className="warehouse__details-subheading">CATEGORY</h3>
                <p className="warehouse__details-category">{this.props.category}</p>
                 </div>
                 <div className="warehouse__details-right-container">
                 <h3 className="warehouse__details-subheading">STATUS</h3>
                 <div className="warehouse-details-status-background">
                <p className="warehouse__details-status">{this.props.status}</p>
                </div>
                 <h3 className="warehouse__details-subheading">QTY</h3>
                <p className="warehouse__details-quantity">{this.props.quantity}</p>
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
