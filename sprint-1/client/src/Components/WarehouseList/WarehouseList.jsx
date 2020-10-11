import React, { useState } from 'react';
import WarehouseListCard from '../WarehouseListCard/WarehouseListCard';
import WarehouseSearch from '../WarehouseSearch/WarehouseSearch';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import Header from '../Header/Header';
import Background from '../Background/Background';
import axios from "axios";

 class WarehouseList extends React.Component {
    state = {warehouses: [], init:0}


// TODO: THIS FUNC IS FOR SEARCH NEEDS TO BE CHANGED
    // function WarehouseList(props) {
    //     let [warehouseData, setWarehouseData] = useState(props.warehouses)
    //     const onSearchChange = (searchText) => {
    //         if (searchText === '') { setWarehouseData(props.warehouses) }
    //         else {
    //             console.log(props.warehouses);
    //             searchText = searchText.toLowerCase();
    //             const filteredWarehouses = props.warehouses.filter(warehouse => warehouse.contact.name.toLowerCase().includes(searchText) || warehouse.name.toLowerCase().includes(searchText) || warehouse.address.toLowerCase().includes(searchText) || warehouse.city.toLowerCase().includes(searchText) || warehouse.country.toLowerCase().includes(searchText) || warehouse.contact.phone.toLowerCase().includes(searchText) || warehouse.contact.email.toLowerCase().includes(searchText));
    //             // console.log('filtered', filteredWareHouses);
    //             setWarehouseData(filteredWarehouses);
    //         }
    //         // console.log(searchText);
    //     }





    async componentDidMount() {
      await axios.get('warehouses')
      .then((res) => {
        const warehouses = res.data
        this.setState({warehouses: warehouses, init:1})
      })
    // console.log(this.state.warehouses);
    };
    // }
    // componentDidMount() {
    //   this.setState({deleteObject: false})
    // }

    // componentDidUpdate(PrevState) {
    //   console.log(PrevState);
    //   // if (PrevParams.deleteObject != CurrentParams.deleteObject) {}
    // }
    render () {
    return(
            <section className="warehouse">
            <Header />
            {/* <Background /> */}
            <div className="warehouse__container">
            <WarehouseSearch />
            {/* <DeleteWarehouse deleteObject={this.state.deleteObject}/>     */}
            <div className="warehouse__tablet-div">
                <p className="warehouse__tablet-warehouse">WAREHOUSE</p>
                <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__tablet-address">ADDRESS</p>
                <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__tablet-contact">CONTACT NAME</p>
                <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__tablet-contactinfo">CONTACT INFORMATION</p>
                <img className="warehouse__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__tablet-actions">ACTIONS</p>
            </div>
                {this.state.warehouses && this.state.warehouses.map((warehouseDetails) => <WarehouseListCard key={warehouseDetails.id} id={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email}/>)}
            </div>
        </section>
    )}
    }

export default WarehouseList;