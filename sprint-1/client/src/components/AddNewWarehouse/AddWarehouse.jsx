import React from "react";
import "./addWarehouse.scss";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default class AddWarehouse extends React.Component {
  addWarehouse = (e) => {
    e.preventDefault();
    if (e.target.warehouse.value === "") {
      console.log(e.target.warehouse.value);
      return (
        <label className="add__warehouse-input-label" htmlFor="warehouse">
          Warehouse Name
        </label>
      );
    } else {
      axios.post("/", AddWarehouse).then((res) => {
        console.log(res.data);
      });
      let addWarehouse = {
        // id: uuidv4(),
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
    }
    // TODO: Delete clg
    // console.log(addWarehouse);
    document.getElementById("form").reset();
  };

  // isEmpty = (e) => {
  //   e.preventDefault();
  //   if (e.target.warehouse.value === "") {
  //     console.log(e.target.warehouse.value);
  //     return (
  //       <label className="add__warehouse-input-label" htmlFor="warehouse">
  //         Warehouse Name
  //       </label>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    let isWarehouse = document.getElementsByClassName(".add__warehouse-input");
    let isEmpty;

    if (isWarehouse.value === "" || undefined || null) {
      console.log("is empty");

      return (isEmpty = (
        <label className="add__warehouse-input-label" htmlFor="warehouse">
          Warehouse Name
        </label>
      ));
    } else {
      // return (isEmpty = null);
    }

    return (
      <div className="add">
        <div className="add__title-container">
          <img src="" alt="" />
          <h2 className="add__title">Add New Warehouse</h2>
        </div>
        <div className="add__form-container">
          {/* <div className="add"> */}
          <form
            id="form"
            onSubmit={this.addWarehouse}
            className="add__form"
            action=""
          >
            <div className="add__form-container-top">
              <div className="add__warehouse-details">
                <h3 className="add__warehouse-details-title">
                  Warehouse Details
                </h3>
              </div>
              <label className="add__warehouse-input-label" htmlFor="warehouse">
                Warehouse Name
              </label>
              <input
                // id="warehouse-name"
                name="warehouse"
                placeholder="Warehouse Name"
                className="add__warehouse-input"
                type="text"
              />
              {isEmpty}

              <label className="add__warehouse-input-label" htmlFor="street">
                Street Address
              </label>
              <input
                name="street"
                placeholder="Street Address"
                className="add__warehouse-input"
                type="text"
              />
              {/* {isEmpty} */}
              {/* <label htmlFor="street" className="add__warning">
                warning
              </label> */}
              <label className="add__warehouse-input-label" htmlFor="city">
                City
              </label>
              <input
                name="city"
                placeholder="City"
                className="add__warehouse-input"
                type="text"
              />
              <label className="add__warehouse-input-label" htmlFor="country">
                Country
              </label>
              <input
                name="country"
                placeholder="Country"
                className="add__warehouse-input"
                type="text"
              />
            </div>
            <div className="add__form-divider"></div>
            <div className="add__form-container-top">
              <div className="add__warehouse-details add__warehouse-details-contact">
                <h3 className="add__warehouse-details-title">
                  Contact Details
                </h3>
              </div>
              <label className="add__warehouse-input-label" htmlFor="contact">
                Contact Name
              </label>
              <input
                name="contact"
                placeholder="Contact Name"
                className="add__warehouse-input"
                type="text"
              />
              <label className="add__warehouse-input-label" htmlFor="cposition">
                Position
              </label>
              <input
                name="position"
                placeholder="Position"
                className="add__warehouse-input"
                type="text"
              />
              <label className="add__warehouse-input-label" htmlFor="number">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="Phone Number"
                className="add__warehouse-input"
                type="text"
              />
              <label className="add__warehouse-input-label" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                placeholder="Email"
                className="add__warehouse-input"
                type="text"
              />
            </div>
            <div className="add__warehouse-btn">
              <button className="add__warehouse-btn-cancel">
                <h3 className="add__warehouse-btn-cancel-h3"> Cancel</h3>
              </button>
              <button className="add__warehouse-btn-save">
                <h3 className="add__warehouse-btn-save-h3">+ Add Warehouse</h3>
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
