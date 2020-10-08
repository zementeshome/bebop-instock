import React from 'react'
import '../WarehouseList/WarehouseList.scss';

function WarehouseSearch() {
    return (
        <div>
        <div className="warehouse__search-container">
        <h2 className="warehouse__header">Warehouses</h2>
        <input className="warehouse__search" type='text' placeholder="Search..."/>
            <img className="warehouse__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <button className="warehouse__button">+ Add New Warehouse</button>
            </div>
            <span className="warehouse__underline"></span>
            {/* <hr /> */}
            </div>
    )
}

export default WarehouseSearch;
