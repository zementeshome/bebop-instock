import React from "react";

class WarehouseListCard extends React.Component {
  clickHandler = (e) => {
    // this.setState({deleteObject: true})
    console.log(this.state.deleteObject);
  }
  render() {
    // console.log(this.props);
    return (
      <section className="warehouse">
        <div className="warehouse__content-container">
          <div className="warehouse__left-container">
            <h3 className="warehouse__sub-heading">WAREHOUSE</h3>
            <p className="warehouse__name">{this.props.name}</p>
            <img
              className="warehouse__arrow"
              src={
                process.env.PUBLIC_URL + "/assets/Icons/chevronright24px.svg"
              }
              alt="right arrow"
            />
            <h3 className="warehouse__sub-heading">ADDRESS</h3>
            <p className="warehouse__address">{this.props.address}</p>
            <p className="warehouse__city">{this.props.city}</p>
            <p className="warehouse__country">{this.props.country}</p>
          </div>
          <div className="warehouse__right-container">
            <h3 className="warehouse__sub-heading">CONTACT NAME</h3>
            <p className="warehouse__contact">{this.props.contact.name}</p>
            <h3 className="warehouse__sub-heading">CONTACT INFORMATION</h3>
            <p className="warehouse__contact-phone">
              {this.props.contactPhone}
            </p>
            <p className="warehouse__contact-email">
              {this.props.contact.email}
            </p>
          </div>
        </div>
        <img
          className="warehouse__delete-icon" 
          onClick = {this.clickHandler}
          src={process.env.PUBLIC_URL + "/assets/Icons/deleteoutline24px.svg"}
          alt="delete icon"
        />
        <img
          className="warehouse__delete-icon"
          src={process.env.PUBLIC_URL + "/assets/Icons/edit24px.svg"}
          alt="edit icon"
        />
        <span className="warehouse__underline"></span>
      </section>
    );
  }
}

export default WarehouseListCard;
