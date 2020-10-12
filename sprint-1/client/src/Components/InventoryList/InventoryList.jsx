import React from 'react';
import  InventoryListCardMap from '../InventoryListCardMap/InventoryListCardMap';
import './InventoryList.scss';
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';
import Header from '../Header/Header'

function getParams(pathname) {
  const matchProfile = matchPath(pathname, {
    path: `inventories`,
  });
  return (matchProfile && matchProfile.params) || {};
};
class InventoryList extends React.Component {
    state = {inventories: [], init:0}
    
   componentDidMount() {
        const url = 'http://localhost:8080';
        const config = {
            method: 'get',
            url: `${url}/inventories`,
            headers: { },
            data : ''
          };
         axios(config)   
            .then(res => {
              const inventories = res.data
              this.setState({ inventories: res.data, init: 1  })
            })
        .catch(err => {
            console.log(err)
    })
  }


    render () {
      return (
        <>
        <Header />
        <section className="inventoryList">
        <div className="inventoryList__container">
        <div className="inventoryList__search-container">
        <h2 className="inventoryList__header">Inventory</h2>
        <div className="inventoryList__button-container">
        <input className="inventoryList__search" type='text' placeholder="Search..."/>
            <img className="inventoryList__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <Link to="/addinventoryitem"><button className="inventoryList__button">+ Add New Item</button></Link>
            </div>
            </div>
            <div className="inventoryList__tablet-div">
                <p className="inventoryList__tablet-inventoryList">Inventory ITEM</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-category">CATEGORY</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-status">STATUS</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-quantity">QTY</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-warehouse">WAREHOUSE</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-actions">ACTIONS</p>
            </div>
            {this.state.inventories.map((inventoryList) => 
            < InventoryListCardMap key={inventoryList.id} 
                 id={inventoryList.id} itemName={inventoryList.itemName} 
                 warehouseName={inventoryList.warehouseName} status={inventoryList.status} 
                 category={inventoryList.category} quantity={inventoryList.quantity}/>)}
            </div>
        </section>
        </>
    )}
}

export default  InventoryList;