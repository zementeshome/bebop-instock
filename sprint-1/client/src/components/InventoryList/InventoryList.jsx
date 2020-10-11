import React from 'react';
import InventoryListCard from '../InventoryListCard/InventoryListCard';
import './InventoryList.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class InventoryList extends React.Component {
    state = {warehouses: [], init:0}

    async componentDidMount() {
      await axios.get('warehouses')
      .then((res) => {
        const warehouses = res.data
        this.setState({warehouses: warehouses, init:1})
      })
    // console.log(this.state.warehouses);
    };
    render () {
    return (
        <section className="inventory">
        <div className="inventory__container">
        <div className="inventory__search-container">
        <h2 className="inventory__header">Inventory</h2>
        <div className="inventory__button-container">
        <input className="inventory__search" type='text' placeholder="Search..."/>
            <img className="inventory__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <Link to="/addinventoryitem"><button className="inventory__button">+ Add New Warehouse</button></Link>
            </div>
            </div>
            <div className="inventory__tablet-div">
                <p className="inventory__tablet-inventory">INVENTORY ITEM</p>
                <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventory__tablet-category">CATEGORY</p>
                <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventory__tablet-status">STATUS</p>
                <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventory__tablet-quantity">QTY</p>
                <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventory__tablet-warehouse">WAREHOUSE</p>
                <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventory__tablet-actions">ACTIONS</p>
            </div>
            {props.manhattan.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)}
            </div>
        </section>
    )}
}

export default InventoryList;
