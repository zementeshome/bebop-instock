// import React from './node_modules/react';
import React, { useState } from 'react';
import InventoryListCard from '../InventoryListCard/InventoryListCard';
import './InventoryList.scss';

function InventoryList(props) {
    let [inventoryData, setInventoryData] = useState(props.manhattan)
    const onSearchChange = (searchText) => {
        if (searchText === '') { setInventoryData(props.manhattan) }
        else {
            // console.log(props.manhattan);
            searchText = searchText.toLowerCase();
            const filteredInventory = props.manhattan.filter(inventory => inventory.itemName.toLowerCase().includes(searchText) || inventory.warehouseName.toLowerCase().includes(searchText) || inventory.status.toLowerCase().includes(searchText) || inventory.category.toLowerCase().includes(searchText));
            // console.log('filtered', filteredWareHouses);
            setInventoryData(filteredInventory);

            // || inventory.quantity.toString().toLowerCase.includes(searchText) not working for quantity
        }
        // console.log(searchText);
    }
    return (
        <section className="inventory">
        <div className="inventory__container">
        <div className="inventory__search-container">
        <h2 className="inventory__header">Inventory</h2>
        <div className="inventory__button-container">
        <input className="inventory__search" type='text' placeholder="Search..." onChange={(e) => onSearchChange(e.target.value)}/>
            <img className="inventory__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <button className="inventory__button">+ Add New Warehouse</button>
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
            {inventoryData.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)}
            </div>
        </section>
    )
}

export default InventoryList;
