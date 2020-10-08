 import React from 'react';
//  import { Link } from 'react-router-dom';

 class WarehouseListCard extends React.Component {
     render() {
         return (
            // <Link to="/warehousedetails" style={{textDecoration: 'none'}}>
             <section className="warehouse">
                  <span className="warehouse__underline"></span>
             <div className="warehouse__content-container">
                 <div className="warehouse__left-container">
                 <h3 className="warehouse__sub-heading">WAREHOUSE</h3>
                <p className="warehouse__name">{this.props.name}</p>
                <img className="warehouse__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
                <h3 className="warehouse__sub-heading">ADDRESS</h3>
                <p className="warehouse__address">{this.props.address},{this.props.addressCity},{this.props.addressCountry}</p>
                {/* <p className="warehouse__city">{this.props.addressCity},</p>
                <p className="warehouse__country">{this.props.addressCountry}</p> */}
                </div>
                <div className="warehouse__right-container">
                 <h3 className="warehouse__sub-heading">CONTACT NAME</h3>
                 <p className="warehouse__contact">{this.props.contact}</p>
                 <h3 className="warehouse__sub-heading">CONTACT INFORMATION</h3>
                <p className="warehouse__contact-phone">{this.props.contactPhone}</p>
                <p className="warehouse__contact-email">{this.props.contactEmail}</p>
             </div>
             </div>
             <span className="warehouse__underline-tablet"></span>
             <div className="warehouse__icon-container">
             <img className="warehouse__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
                <img className="warehouse__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/>
                </div>
             </section>
            //  </Link>
         );
     }
 }

 export default WarehouseListCard;