import React from 'react';

function WarehouseList() {
    return(
        <section className="warehouse">
            <div className="warehouse__container">
            <div className="warehouse__search-container">
            <h1 className="warehouse__header">Warehouses</h1>
            <input className="warehouse__search"type='text' placeholder="Search"/>
                <img className="warehouse__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search-24px.svg'} alt="maginifying glass" />
                <button className="warehouse__button">+ Add New Warehouse</button>
                </div>
                <span className="warehouse-underline"></span>
            </div>
        </section>
    )
}