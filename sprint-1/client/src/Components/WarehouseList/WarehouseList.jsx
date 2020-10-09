import React, { useState } from 'react';
import WarehouseListCard from '../WarehouseListCard/WarehouseListCard';
import WarehouseSearch from '../WarehouseSearch/WarehouseSearch';
import './WarehouseList.scss';

function WarehouseList(props) {
    let [warehouseData, setWarehouseData] = useState(props.warehouses)
    const onSearchChange = (searchText) => {
        if (searchText === '') { setWarehouseData(props.warehouses) }
        else {
            console.log(props.warehouses);
            searchText = searchText.toLowerCase();
            const filteredWareHouses = props.warehouses.filter(warehouse => warehouse.contact.name.toLowerCase().includes(searchText) || warehouse.name.toLowerCase().includes(searchText) || warehouse.address.toLowerCase().includes(searchText) || warehouse.city.toLowerCase().includes(searchText) || warehouse.country.toLowerCase().includes(searchText) || warehouse.contact.phone.toLowerCase().includes(searchText) || warehouse.contact.email.toLowerCase().includes(searchText));
            // console.log('filtered', filteredWareHouses);
            setWarehouseData(filteredWareHouses);
        }
        // console.log(searchText);
    }
    return (
        <section className="warehouse">
            <div className="warehouse__container">
                <WarehouseSearch onSearchChange={onSearchChange} />
                <div className="warehouse__tablet-div">
                    <p className="warehouse__tablet-warehouse">WAREHOUSE</p>
                    <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon" />
                    <p className="warehouse__tablet-address">ADDRESS</p>
                    <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon" />
                    <p className="warehouse__tablet-contact">CONTACT NAME</p>
                    <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon" />
                    <p className="warehouse__tablet-contactinfo">CONTACT INFORMATION</p>
                    <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon" />
                    <p className="warehouse__tablet-actions">ACTIONS</p>
                </div>
                {warehouseData.map((warehouseDetails) => <WarehouseListCard key={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email} />)}
            </div>
        </section>
    )
}

export default WarehouseList;