import React from "react";
import "./editWarehouse.scss";
import { v4 as uuidv4 } from "uuid";

export default class EditWarehouse extends React.Component {
  editWarehouse = (e) => {
    e.preventDefault();
    let editWarehouse = {
      id: uuidv4(),
      name: e.target.warehouse.value,
      address: e.target.street.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contact.value,
        position: e.target.position.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };
    // TODO: Delete clg
    console.log(editWarehouse);
    document.getElementById("form").reset();
  };
  render() {
    return (
      <div className="edit">
        <div className="edit__title-container">
          <img src="" alt="" />
          <h2 className="edit__title">Edit Warehouse</h2>
        </div>
        <div className="edit__form-container">
          {/* <div className="edit"> */}
          <form
            id="form"
            onSubmit={this.editWarehouse}
            className="edit__form"
            action=""
          >
            <div className="edit__form-container-top">
              <div className="edit__warehouse-details">
                <h3 className="edit__warehouse-details-title">
                  Warehouse Details
                </h3>
              </div>
              <label
                className="edit__warehouse-input-label"
                htmlFor="warehouse"
              >
                Warehouse Name
              </label>
              <input
                name="warehouse"
                placeholder="King West"
                className="edit__warehouse-input"
                type="text"
              />
              <label className="edit__warehouse-input-label" htmlFor="street">
                Street Address
              </label>
              <input
                name="street"
                placeholder="469 King Street West"
                className="edit__warehouse-input"
                type="text"
              />
              <label className="edit__warehouse-input-label" htmlFor="city">
                City
              </label>
              <input
                name="city"
                placeholder="Toronto"
                className="edit__warehouse-input"
                type="text"
              />
              <label className="edit__warehouse-input-label" htmlFor="country">
                Country
              </label>
              <input
                name="country"
                placeholder="CAN"
                className="edit__warehouse-input"
                type="text"
              />
            </div>
            <div className="edit__form-divider"></div>
            <div className="edit__form-container-top">
              <div className="edit__warehouse-details edit__warehouse-details-contact">
                <h3 className="edit__warehouse-details-title">
                  Contact Details
                </h3>
              </div>
              <label className="edit__warehouse-input-label" htmlFor="contact">
                Contact Name
              </label>
              <input
                name="contact"
                placeholder="Graeme Lyon"
                className="edit__warehouse-input"
                type="text"
              />
              <label
                className="edit__warehouse-input-label"
                htmlFor="cposition"
              >
                Position
              </label>
              <input
                name="position"
                placeholder="Warehouse Manager"
                className="edit__warehouse-input"
                type="text"
              />
              <label className="edit__warehouse-input-label" htmlFor="number">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="+1 (647) 504-0911"
                className="edit__warehouse-input"
                type="text"
              />
              <label className="edit__warehouse-input-label" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                placeholder="glyon@instock.com"
                className="edit__warehouse-input"
                type="text"
              />
            </div>
            <div className="edit__warehouse-btn">
              <button className="edit__warehouse-btn-cancel">
                <h3 className="edit__warehouse-btn-cancel-h3"> Cancel</h3>
              </button>
              <button className="edit__warehouse-btn-save">
                <h3 className="edit__warehouse-btn-save-h3">Save</h3>
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
