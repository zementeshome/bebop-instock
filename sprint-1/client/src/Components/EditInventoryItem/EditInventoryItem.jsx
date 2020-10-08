import React from "react";
import "./editInventoryItem.scss";

export default function EditInventoryItem() {
  return (
    <div className="inventory">
      <div className="inventory__title-container">
        <h2 className="inventory__title">
          <img
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt="Arrow"
          />
          Edit Inventory Item
        </h2>
      </div>
      <form className="inventory__form" action="">
        <div className="inventory__heading">
          <h3 className="inventory__heading-title">Item Details</h3>
        </div>
        <div className="inventory__form-top-container">
          <div className="inventory__form-item-container">
            <label
              className="inventory__form-item-label"
              htmlFor="inventory__form-item-input"
            >
              Item Name
            </label>
            <input className="inventory__form-item-input" type="text" />
          </div>
          <div className="inventory__form-description-container">
            <label
              className="inventory__form-description-label"
              htmlFor="inventory__form-description-input"
            >
              Description
            </label>
            <input
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'
              className="inventory__form-description-input"
              type="text"
            />
          </div>
          <div className="inventory__form-category-container">
            <label className="inventory__form-category-label" htmlFor="">
              Category
            </label>
            <select
              className="inventory__form-category-input"
              name="category"
              id="category"
            >
              <option
                className="inventory__form-category-input-option"
                value="Electronics"
              >
                Electronics
              </option>
              <option
                className="inventory__form-category-input-option"
                value="Gear"
              >
                Gear
              </option>
              <option
                className="inventory__form-category-input-option"
                value="Apparel"
              >
                Apparel
              </option>
              <option
                className="inventory__form-category-input-option"
                value="Accessories"
              >
                Accessories
              </option>
              <option
                className="inventory__form-category-input-option"
                value="Health"
              >
                Health
              </option>
            </select>
          </div>
          <div className="inventory__separation"></div>
          <div class="inventory__form-bottom-container">
            <div className="inventory__form-lower-container">
              <h2 className="inventory__heading-title">Item Availability</h2>
            </div>
            <div className="inventory__form-status-container">
              <label
                className="inventory__form-status-label"
                htmlFor="inventory__form-status-input-container"
              >
                Status
              </label>
              <div className="inventory__form-status-input-container">
                <input
                  id="in-stock"
                  value="In Stock"
                  className="inventory__form-status-radio"
                  type="radio"
                />
                <label htmlFor="in-stock">In Stock</label>

                <input
                  id="out-stock"
                  value="Out of Stock"
                  className="inventory__form-status-radio"
                  type="radio"
                />
                <label htmlFor="out-stock">Out of Stock</label>
              </div>
            </div>
            <div className="inventory__form-warehouse-container">
              <label
                className="inventory__form-warehouse-label"
                htmlFor="inventory__form-warehouse-input"
              >
                Warehouse
              </label>
              <select
                className="inventory__form-warehouse-input"
                name="warehouse"
                id="warehouse"
              >
                <option
                  className="inventory__form-warehouse-option"
                  value="Manhattan"
                >
                  Manhattan
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="King West"
                >
                  King West
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="Granville"
                >
                  Granville
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="San Fran"
                >
                  San Fran
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="Santa Monica"
                >
                  Santa Monica
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="Seattle"
                >
                  Seattle
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="Montreal"
                >
                  Montreal
                </option>
                <option
                  className="inventory__form-warehouse-option"
                  value="Boston"
                >
                  Boston
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="inventory__form-btn-container">
          <button className=" inventory__form-btn inventory__form-btn-cancel">
            Cancel
          </button>
          <button className=" inventory__form-btn inventory__form-btn-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
