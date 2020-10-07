import React from "react";
import "./editWarehouse.scss";

export default function EditWarehouse() {
  return (
    <div className="edit">
      <div className="edit__title-container">
        <img src="" alt="" />
        <h2 className="edit__title">Edit Warehouse</h2>
      </div>
      <div className="edit__form-container">
        {/* <div className="edit"> */}
        <form className="edit__form" action="">
          <div className="edit__form-container-top">
            <div className="edit__warehouse-details">
              <h3 className="edit__warehouse-details-title">
                Warehouse Details
              </h3>
            </div>
            <label
              className="edit__warehouse-input-label"
              htmlFor="warehouse-name"
            >
              Warehouse-Name
            </label>
            <input
              placeholder="King West"
              className="edit__warehouse-input"
              name="warehouse-name"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="warehouse-street"
            >
              Street Address
            </label>
            <input
              placeholder="469 King Street West"
              name="warehouse-street"
              className="edit__warehouse-input"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="warehouse-city"
            >
              City
            </label>
            <input
              placeholder="Toronto"
              name="warehouse-city"
              className="edit__warehouse-input"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="warehouse-country"
            >
              Country
            </label>
            <input
              placeholder="CAN"
              name="warehouse-country"
              className="edit__warehouse-input"
              type="text"
            />
          </div>
          <div className="edit__form">
            <div className="edit__warehouse-details edit__warehouse-details-contact">
              <h3 className="edit__warehouse-details-title">Contact Details</h3>
            </div>
            <label
              className="edit__warehouse-input-label"
              htmlFor="contact-name"
            >
              Contact Name
            </label>
            <input
              placeholder="Graeme Lyon"
              className="edit__warehouse-input"
              name="contact-name"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="contact-position"
            >
              Position
            </label>
            <input
              placeholder="Warehouse Manager"
              name="contact-position"
              className="edit__warehouse-input"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="contact-number"
            >
              Phone Number
            </label>
            <input
              placeholder="+1 (647) 504-0911"
              name="contact-number"
              className="edit__warehouse-input"
              type="text"
            />
            <label
              className="edit__warehouse-input-label"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              placeholder="glyon@instock.com"
              name="contact-email"
              className="edit__warehouse-input"
              type="text"
            />
          </div>
          <div className="edit__warehouse-btn">
            <button className="edit__warehouse-btn-cancel">Cancel</button>
            <button className="edit__warehouse-btn-save">Save</button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}
