import React from "react";
import "./addNewInventoryItem.scss";
import axios from "axios"
import { Link } from 'react-router-dom';
import Header from '../Header/Header'

export default class AddNewInventoryItem extends React.Component  {
  state= {
          warehouses: [], outStock: false, init:0,
          itemNameEmpty: false, descriptionEmpty: false, 
          categoryEmpty: false, quantityEmpty: false,
          selectedWarehouseID: ''
        }

  // CALLING WAREHOUSES TO FILL OPTIONS  
  async componentDidMount() {
      await axios.get('warehouses')
      .then((res) => {
        // const warehouses = res.data
        this.setState({warehouses: res.data, init:1, selectedWarehouseID: res.data[0].id})
      })
  }

  // FUNCTION TO ADD NEW INVENTORY
    // PREVENT ERRORS FIRST
    addInventory = (e) => { e.preventDefault();
      //VALIDATIONS
      //console.log('you are here 101')
      
      console.log('before validation in state')
      console.log(e.target)
      if (e.target.itemName.value === '') {
        this.setState({ itemNameEmpty: true})
      }  if (e.target.description.value === '')  {
        this.setState({ descriptionEmpty: true})
      } if (e.target.category.value === '')  {
        this.setState({categoryEmpty: true})
      } else {
        console.log('you are inside axios 10110101')
        //AXIOS CALL TO ADD Inventory

        let id = Date.now() + '-abc-' + Date.now();
        let statusVar = 'Out of Stock';
        let quantityVar = 0;
        if (e.target.stock.value) {
           statusVar = 'In Stock';
           quantityVar = e.target.quantity.value;
        } else {
          statusVar =  'Out of Stock'
          quantityVar = 0;
        }

        let addInventoryObj = {
          //id: uuidv4(),
          id: id,

          warehouseID: this.state.selectedWarehouseID,
          warehouseName: e.target.warehouse.value, 

          itemName: e.target.itemName.value,
          description: e.target.description.value,
          category: e.target.category.value,
          status: statusVar, 
          quantity: quantityVar
        };
        console.log('addInventoryObject result=')
        console.log(addInventoryObj)
        const url = 'http://localhost:8080';
        const config = {
          method: 'post',
          url: `${url}/inventories`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : addInventoryObj
        };
        axios(config)   
          .then(result => {
              // this.setState({
              //     contact: response.data.contact,
              //     warehouses: res.data, init:1,
              //     inventories: result.data.inventories
              // })
        })
        .catch(err => {
            console.log(err)
        })
        // AXIOS AND ADDING ENDS HERE
 
     }   

     document.getElementById("form").reset();
     this.props.history.push("/inventories");
  };

  
  inStock = () => {
  this.setState({ outStock : true})
  }

  OutOfStock = () => {
    this.setState({ outStock: false})
  }

  OnClickOptionWarehouse = (e) => {
    console.log(e)
    //  this.setState({ selectedWarehouseID: e.})
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
    <>
<<<<<<< HEAD
    < Header/>
=======
    <Header />  
>>>>>>> development
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
          <div className="add__inventory-form-bottom-container">
            <div className="add__inventory-heading-bottom">
              <h2 className="add__inventory-heading-title">Item Availability</h2>
            </div>
            <div className="add__inventory-form-status-container">
              <label
                className="add__inventory-form-status-label add__inventory-form-status-label-status"
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
              <label className="add__inventory-form-warehouse-label"
                htmlFor="add__inventory-form-warehouse-input">
                Warehouse
              </label>

              <select className="add__inventory-form-warehouse-input"
                name="warehouse" id="warehouse">

                {this.state.warehouses &&
                  this.state.warehouses.map((warehouseMap) => 
                    { return  <option key={warehouseMap.id}  id={warehouseMap.id} onClick={this.OnClickOptionWarehouse}
                                      className="add__inventory-form-warehouse-option">
                                {warehouseMap.name}
                              </option>
                  }
                  )}

              </select> 

              </div>
            </div>
          </div>
        </div>
        <div className="add__inventory-form-btn-container">
          <Link to="/inventories"><button className=" add__inventory-form-btn add__inventory-form-btn-cancel">
            Cancel
          </button></Link>
          {/* <Link to="/inventories"> */}
            
          <button oncClick={this.addInventory} className=" add__inventory-form-btn add__inventory-form-btn-save">
            Save
          </button>
          
          {/* </Link> */}
        </div>
      </form>
    </div>
<<<<<<< HEAD
  </>
  );
}
}
=======
    </>
   );
  }
}
>>>>>>> development
