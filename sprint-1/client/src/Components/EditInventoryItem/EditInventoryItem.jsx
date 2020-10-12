import React from "react";
import "./editInventoryItem.scss";
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

export default class EditeditInventoryItem extends React.Component {

  state= {
    outStock: false
  }


  editeditInventory = (e) => {
    e.preventDefault()
   
   let editeditInventoryItems = {
     // id: ID FOR INCOMING ITEM,
     // warehouseID: WAREHOUSE ID,
     warehouseName: e.target.warehouse.value,
     itemName: e.target.item.value,
     description: e.target.description.value,
     category: e.target.category.value,
     status: e.target.radio.value,
     quantity: e.target.quantity.value,
     }
     console.log(editeditInventoryItems);
     axios.put("#", editeditInventoryItems).then((res) => {

    });
   };
  
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
              <div className="add__editInventory-form-item-container">
                <div className="add__editInventory-form-label-heading" >
                <label
                  className="add__editInventory-form-item-label"
                  htmlFor="add__editInventory-form-item-input"
                >
                  Quantity
                </label>
                <input name="quantity" placeholder="0" className="add__editInventory-form-item-input" type="text" />
              </div>
          </div> 
        </div>
  } else {
    stock = <div className="add__editInventory-form-item-input-display-non">

      <input defaultValue={0} className="add__editInventory-form-item-input-display-non" name="quantity"></input>
    </div> 
  }



  return (

  <>
  <Header/>
    <div className="editInventory">
      <div className="editInventory__title-container">
        <h2 className="editInventory__title">
          <Link to="/inventories"><img
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt="Arrow"
          /></Link>
          Edit editInventory Item
        </h2>
      </div>
      <form onSubmit={this.editeditInventory} className="editInventory__form" action="">
        <div className="editInventory__form-outer-container" >
        <div className="editInventory__form-top-container">
        <div className="editInventory__heading">
          <h3 className="editInventory__heading-title">Item Details</h3>
        </div>
          <div className="editInventory__form-item-container">
            <div className="editInventory__form-label-heading" >
            <label
              className="editInventory__form-item-label"
              htmlFor="editInventory__form-item-input"
            >
              Item Name
            </label>
            <input name="item"  placeholder="Television" className="editInventory__form-item-input" type="text" />
            </div>
          </div>
          <div className="editInventory__form-description-container">
            <div className="editInventory__form-label-heading" >
            <label
              className="editInventory__form-description-label"
              htmlFor="editInventory__form-description-input"
            >
              Description
            </label>
            <textarea
            name="description"
              placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
              className="editInventory__form-description-input"
              type="text"
            />
            </div>
          </div>
          <div className="editInventory__form-category-container">
            <div className="editInventory__form-label-heading" >
            <label className="editInventory__form-category-label" htmlFor="">
              Category
            </label>
            <select
            name="category"
              className="editInventory__form-category-input"
              id="category"
            >
              <option
                className="editInventory__form-category-input-option"
                value="Electronics"
              >
                Electronics
               
              </option>
              <option
                className="editInventory__form-category-input-option"
                value="Gear"
              >
                Gear
              </option>
              <option
                className="editInventory__form-category-input-option"
                value="Apparel"
              >
                Apparel
              </option>
              <option
                className="editInventory__form-category-input-option"
                value="Accessories"
              >
                Accessories
              </option>
              <option
                className="editInventory__form-category-input-option"
                value="Health"
              >
                Health
              </option>
              
            </select>
            </div>
          </div>
          </div>
          <div className="editInventory__separation"></div>
          <div class="editInventory__form-bottom-container">
            <div className="editInventory__heading-bottom">
              <h2 className="editInventory__heading-title">Item Availability</h2>
            </div>
            <div className="editInventory__form-status-container">
              <label
                className="editInventory__form-status-label editInventory__form-status-label-status "
                htmlFor="editInventory__form-status-input-container"
              >
                Status
              </label>
              <div className="editInventory__form-status-input-container">
                <div className="editInventory__form-status-radio-container" >
                <input
                onClick={this.inStock}
                  name="radio"
                  id="in-stock"
                  value="In Stock"
                  className="editInventory__form-status-radio"
                  type="radio"
                />
                <label className="editInventory__form-status-radio-label" htmlFor="in-stock">In Stock</label>
                </div>

                <div className="editInventory__form-status-radio-container-right" >
                <input
                onClick={this.OutOfStock}
                name="radio"
                  id="out-stock"
                  value="Out of Stock"
                  className="editInventory__form-status-radio"
                  type="radio"
                />
                <label className="editInventory__form-status-radio-label" htmlFor="out-stock">Out of Stock</label>
                </div>
              </div>
            </div>
{/* //FIXME: */}
            <div>{stock}</div>
 {/* //FIXME: */}
            <div className="editInventory__form-warehouse-container">
              <div className="editInventory__form-label-heading" >
              <label
                className="editInventory__form-warehouse-label"
                htmlFor="editInventory__form-warehouse-input"
              >
                Warehouse
              </label>
              <select
                className="editInventory__form-warehouse-input"
                name="warehouse"
                id="warehouse"
              >
                <option
                  className="editInventory__form-warehouse-option"
                  value="Manhattan"
                >
                  Manhattan
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="King West"
                >
                  King West
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="Granville"
                >
                  Granville
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="San Fran"
                >
                  San Fran
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="Santa Monica"
                >
                  Santa Monica
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="Seattle"
                >
                  Seattle
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="Montreal"
                >
                  Montreal
                </option>
                <option
                  className="editInventory__form-warehouse-option"
                  value="Boston"
                >
                  Boston
                </option>
              </select>
              </div>
            </div>
          </div>
        </div>
        <div className="editInventory__form-btn-container">
          <Link to="/inventories"><button className=" editInventory__form-btn editInventory__form-btn-cancel">
            Cancel
          </button></Link>
          <Link to="/inventories"><button className=" editInventory__form-btn editInventory__form-btn-save">
            Save
          </button></Link>
        </div>
      </form>
    </div>
    </>
  );
}
}
