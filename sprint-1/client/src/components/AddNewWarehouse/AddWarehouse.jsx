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
          <div className="edit__warehouse-details">
            <h3 className="edit__warehouse-details-title">Warehouse Details</h3>
          </div>
          <label
            className="edit__warehouse-input-label"
            htmlFor="warehouse-name"
          >
            Warehouse-Name
          </label>
          <input
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
            name="warehouse-country"
            className="edit__warehouse-input"
            type="text"
          />
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
