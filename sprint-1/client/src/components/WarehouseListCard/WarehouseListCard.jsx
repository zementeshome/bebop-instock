import React from "react";

class WarehouseListCard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <section className="warehouse">
        <div className="warehouse__content-container">
          <div className="warehouse__left-container">
            <h3 className="warehouse__sub-heading">WAREHOUSE</h3>
            <div className="warehouse__name-container">
            <p className="warehouse__name">{this.props.name}</p>
            <img className="warehouse__arrow" src={process.env.PUBLIC_URL + "/assets/Icons/chevronright24px.svg"}
              alt="right arrow"/>
              </div>
            <h3 className="warehouse__sub-heading">ADDRESS</h3>
            <p className="warehouse__address">{this.props.address}</p>
            <p className="warehouse__city">{this.props.addressCity}</p>
            <p className="warehouse__country">{this.props.addressCountry}</p>
          </div>
          <div className="warehouse__right-container">
            <h3 className="warehouse__sub-heading">CONTACT NAME</h3>
            <p className="warehouse__contact">{this.props.contact}</p>
            <h3 className="warehouse__sub-heading">CONTACT INFORMATION</h3>
            <p className="warehouse__contact-phone">
              {this.props.contactPhone}
            </p>
            <p className="warehouse__contact-email">
              {this.props.contactEmail}
            </p>
          </div>
        </div>
        <div className="warehouse__icon-container">
        <img
          className="warehouse__delete-icon"
          src={process.env.PUBLIC_URL + "/assets/Icons/deleteoutline24px.svg"}
          alt="delete icon"
        />
        <img
          className="warehouse__delete-icon"
          src={process.env.PUBLIC_URL + "/assets/Icons/edit24px.svg"}
          alt="edit icon"
        />
        </div>
        <span className="warehouse__underline"></span>
      </section>
    );
  }
}

export default WarehouseListCard;
