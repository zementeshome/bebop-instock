import React from "react";
import "./addNewInventoryItem.scss";
import axios from "axios"
import { Link } from 'react-router-dom';

export default class AddNewInventoryItem extends React.Component  {

state= {
  outStock: false
}

inStock = () => {
this.setState({ outStock : true})
}


OutOfStock = () => {
  this.setState({ outStock: false})
}

render() {
let stock;
if (this.state.outStock) {
  stock = <div>
            <div className="add__inventory-form-item-container">
              <div className="add__inventory-form-label-heading" >
              <label
                className="add__inventory-form-item-label"
                htmlFor="add__inventory-form-item-input"
              >
                Quantity
              </label>
              <input onSubmit={this.addInventory}  name="quantity"  placeholder="0" className="add__inventory-form-item-input" type="text" />
            </div>
        </div> 
      </div>
} else {
  stock = <div className="add__inventory-form-item-input-display-non">

      <input defaultValue={0} className="add__inventory-form-item-input-display-non" name="quantity"></input>
    </div> 
}


  return (
    <div className="add">
      <div className="add__inventory-title-container">
        <h2 className="add__inventory-title">
          <Link to="/inventories"><img
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt="Arrow"
          /></Link>
          Add New Inventory Item
        </h2>
      </div>
      <form onSubmit={this.addInventory} className="add__inventory-form" action="">
        <div className="add__inventory-form-outer-container" >
        <div className="add__inventory-form-top-container">
        <div className="add__inventory-heading">
          <h3 className="add__inventory-heading-title">Item Details</h3>
        </div>
          <div className="add__inventory-form-item-container">
            <div className="add__inventory-form-label-heading" >
            <label
              className="add__inventory-form-item-label"
              htmlFor="add__inventory-form-item-input"
            >
              Item Name
            </label>
            <input name="item" placeholder="Television" className="add__inventory-form-item-input" type="text" />
            </div>
          </div>
          <div className="add__inventory-form-description-container">
            <div className="add__inventory-form-label-heading" >
            <label
              className="add__inventory-form-description-label"
              htmlFor="add__inventory-form-description-input"
            >
              Description
            </label>
            <textarea
            name="description"
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
              className="add__inventory-form-description-input"
              type="text"
            />
            </div>
          </div>
          <div className="add__inventory-form-category-container">
            <div className="add__inventory-form-label-heading" >
            <label className="add__inventory-form-category-label" htmlFor="">
              Category
            </label>
            <select
              className="add__inventory-form-category-input"
              name="category"
              id="category"
            >
              <option
                className="add__inventory-form-category-input-option"
                value="Electronics"
              >
                Electronics
               
              </option>
              <option
                className="add__inventory-form-category-input-option"
                value="Gear"
              >
                Gear
              </option>
              <option
                className="add__inventory-form-category-input-option"
                value="Apparel"
              >
                Apparel
              </option>
              <option
                className="add__inventory-form-category-input-option"
                value="Accessories"
              >
                Accessories
              </option>
              <option
                className="add__inventory-form-category-input-option"
                value="Health"
              >
                Health
              </option>
            </select>
            </div>
          </div>
          </div>
          <div className="add__inventory-separation"></div>
          <div class="add__inventory-form-bottom-container">
            <div className="add__inventory-heading-bottom">
              <h2 className="add__inventory-heading-title">Item Availability</h2>
            </div>
            <div className="add__inventory-form-status-container">
              <label
                className="add__inventory-form-status-label inventory__form-status-label-status "
                htmlFor="add__inventory-form-status-input-container"
              >
                Status
              </label>
              <div className="add__inventory-form-status-input-container">
                <div className="add__inventory-form-status-radio-container" >
                <input
                onClick={this.inStock}
                name="stock"
                  id="in-stock"
                  value="In Stock"
                  className="add__inventory-form-status-radio"
                  type="radio"
                />
                <label className="add__inventory-form-status-radio-label" htmlFor="in-stock">In Stock</label>
                </div>

                <div className="add__inventory-form-status-radio-container-right" >
                <input
                onClick={this.OutOfStock}
                name="stock"
                  id="out-stock"
                  value="Out of Stock"
                  className="add__inventory-form-status-radio"
                  type="radio"
                />
                <label className="add__inventory-form-status-radio-label" htmlFor="out-stock">Out of Stock</label>
                </div>
              </div>
            </div>

    {/* //FIXME:  */}
             <div>{stock}</div>
   {/* // FIXME: must go here  */}
            <div className="add__inventory-form-warehouse-container">
              <div className="add__inventory-form-label-heading" >
              <label
                className="add__inventory-form-warehouse-label"
                htmlFor="add__inventory-form-warehouse-input"
              >
                Warehouse
              </label>
              <select
                className="add__inventory-form-warehouse-input"
                name="warehouse"
                id="warehouse"
              >
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Manhattan"
                >
                  Manhattan
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="King West"
                >
                  King West
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Granville"
                >
                  Granville
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="San Fran"
                >
                  San Fran
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Santa Monica"
                >
                  Santa Monica
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Seattle"
                >
                  Seattle
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Montreal"
                >
                  Montreal
                </option>
                <option
                  className="add__inventory-form-warehouse-option"
                  value="Boston"
                >
                  Boston
                </option>
              </select>
              </div>
            </div>
          </div>
        </div>
        <div className="add__inventory-form-btn-container">
          <Link to="/inventories"><button className=" add__inventory-form-btn add__inventory-form-btn-cancel">
            Cancel
          </button></Link>
          <Link to="/inventories"><button className=" add__inventory-form-btn add__inventory-form-btn-save">
            Save
          </button></Link>
        </div>
      </form>
    </div>
  );
}
}
