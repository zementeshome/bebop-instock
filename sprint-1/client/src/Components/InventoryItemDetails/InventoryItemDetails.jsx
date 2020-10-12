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
    <div className="inventory">
      <div className="inventory__header">
        <h2 className="inventory__title">
          {" "}
          <Link to="/inventories"><img
            className="inventory__arrow"
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt=""
          /></Link>{" "}
          Television
        </h2>
        {/* TODO: Add LINK */}
        <button className="inventory__btn">
          <Link to="/editinventoryitem"><img
            className="inventory__edit-icon"
            src={process.env.PUBLIC_URL + "./assets/icons/editWhite24px.svg"}
            alt=""
          /></Link>
          <span className="inventory__btn-edit-title">Edit</span>
        </button>
      </div>
      <div className="inventory__details">
        <div className="inventory__item">
  <h4 className="inventory__description-title">TITLE: </h4>
          <p className="inventory__description">
          {this.state.inventories.description}
          </p>
          <h4 className="inventory__category">CATEGORY: </h4>
          <p className="inventory__category-item">{this.state.inventories.itemName}</p>
        </div>
        <div className="inventory__line"></div>
        <div className="inventory__stock">
          <div className="inventory__status">
            <h4 className="inventory__status-title">STATUS:</h4>
            <div className="inventory__status-title-focus">
              <p className="inventory__status-title-details">{this.state.inventories.status}</p>
            </div>
          </div>
          <div className="inventory__quantity">
            <h4 className="inventory__quantity-title">QUANTITY:</h4>
            <p className="inventory__quantity-amount">{this.state.inventories.quantity}</p>
          </div>
          <div className="inventory__warehouse">
            <h4 className="inventory__warehouse-title">WAREHOUSE:</h4>
            <p className="inventory__warehouse-location">{this.state.inventories.warehouseName}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
 }
}
