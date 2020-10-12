import React from "react";
import "./warehouseInventoryItemDetails.scss";
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

function getParams(pathname) {
  const matchProfile = matchPath(pathname, {
    path: `inventories/:id`,
  });
  return (matchProfile && matchProfile.params) || {};
};

export default class InventoryItemDetails extends React.Component{
  state = {inventories: {}, init:0}
    
  async componentDidMount() {
  // console.log(this.props.match.params.id)
  const id = this.props.match.params.id;
  console.log('InventoryItemDetail id here 1: ' +id);
  const url = 'http://localhost:8080';
  const config = {
      method: 'get',
      url: `${url}/inventories/${id}`,
      headers: { },
      data : ''
    };
  //   console.log(config);
  await axios(config)   
  .then(res => {
      axios(config)
      .then(response => {
            this.setState({
                inventories: res.data, init:1,
            })
          })
  })
  .catch(err => {
      console.log(err)
  })}

  componentDidUpdate(PrevState) {
      const { pathname } = this.props.location;
      const prevPathname = PrevState.location.pathname;
      console.log(pathname)
      console.log(prevPathname)

      const currentParams = getParams(pathname);
      const prevParams = getParams(prevPathname);
      
      if (currentParams.id !== prevParams.id) {
        if (currentParams.id !== undefined) {

          const id = currentParams.id;
          const url = 'http://localhost:8080';
          const config = {
          method: 'get',
          url: `${url}/${id}`,
          headers: { },
          data : ''
        };
         // if (this.props.match.params.id !== prevProps.match.params.id) {
            axios
              .get(`${url}/${id}`)
              .then((res) => {
                this.setState({
                  inventories: res.data.find(
                    (inventory) => inventory["id"] === currentParams.id
                  ),
                });
              })
              .catch((err) => {
                console.log(err);
              });
          //}
          this.props.history.push(`${currentParams.id}`);

        }
      }   
    }



 render() {
  return (
    <div className="warehouseInventory">
      <div className="warehouseInventory__header">
        <h2 className="warehouseInventory__title">
          {" "}
          <Link to="/inventories"><img
            className="warehouseInventory__arrow"
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt=""
          /></Link>{" "}
          Television
        </h2>
        {/* TODO: Add LINK */}
        <button className="warehouseInventory__btn">
          <Link to="/editinventoryitem"><img
            className="warehouseInventory__edit-icon"
            src={process.env.PUBLIC_URL + "./assets/icons/editWhite24px.svg"}
            alt=""
          /></Link>
          <span className="warehouseInventory__btn-edit-title">Edit</span>
        </button>
      </div>
      <div className="warehouseInventory__details">
        <div className="warehouseInventory__item">
  <h4 className="warehouseInventory__description-title">TITLE: </h4>
          <p className="warehouseInventory__description">
          {this.state.inventories.description}
          </p>
          <h4 className="warehouseInventory__category">CATEGORY: </h4>
          <p className="warehouseInventory__category-item">{this.state.inventories.itemName}</p>
        </div>
        <div className="warehouseInventory__line"></div>
        <div className="warehouseInventory__stock">
          <div className="warehouseInventory__status">
            <h4 className="warehouseInventory__status-title">STATUS:</h4>
            <div className="warehouseInventory__status-title-focus">
              <p className="warehouseInventory__status-title-details">{this.state.inventories.status}</p>
            </div>
          </div>
          <div className="warehouseInventory__quantity">
            <h4 className="warehouseInventory__quantity-title">QUANTITY:</h4>
            <p className="warehouseInventory__quantity-amount">{this.state.inventories.quantity}</p>
          </div>
          <div className="warehouseInventory__warehouse">
            <h4 className="warehouseInventory__warehouse-title">WAREHOUSE:</h4>
            <p className="warehouseInventory__warehouse-location">{this.state.inventories.warehouseName}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
 }
}
