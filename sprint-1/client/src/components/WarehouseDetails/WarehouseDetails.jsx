import React from 'react'
import WarehouseDetailsCard from '../WarehouseDetailsCard/WarehouseDetailsCard';
import "./WarehouseDetails.scss"
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import axios from "axios";

class WarehouseDetails extends React.Component {
    state = {warehouses: {}, inventory: [], init:0}
    
    async componentDidMount() {
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id;
    // console.log(id);
    const url = 'http://localhost:8080';
    const config = {
        method: 'get',
        url: `${url}/warehouses/${id}`,
        headers: { },
        data : ''
      };
    //   console.log(config);
    await axios(config)   
    .then(res => {
        this.setState({
            warehouses: res.data, init:1
        })
        // console.log(this.state.warehouses.name);
    })
    .catch(err => {
        console.log(err)
    })}
    
    // async componentDidMount() {
    //   await axios.get(`/:id`)
    //   .then((res) => {
    //     const warehouses = res.data
    //     this.setState({warehouse: warehouses, inventory: [], init:1})
    //   })
    // console.log(this.state.warehouses);
    // };

    render() {
        console.log(this.state);
    return (
        <section className="warehouse__details">
            <Header />
            <div className="warehouse__details-container">
                <div className="warehouse__details-header-container">
                    <Link to="/warehouses"><img className="warehouse__details-arrowicon" src={process.env.PUBLIC_URL + '/assets/Icons/arrow-back24px.svg'} alt=""/></Link>
                    <h1 className="warehouse__details-header">King West</h1>
                {/* <h1 className="warehouse__details-header">{props.inventory.warehouseName}</h1> */}
                <div className="warehouse__details-edit-container">
                <div className="warehouse__details-edit-circle">
                <Link to="/editwarehouse"><img className="warehouse__details-editicon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} fill="#2E66E6" alt=""/></Link>
                <p className="warehouse__details-edit-text">Edit</p>
                </div>
                </div>
                </div>
                <span className="warehouse__details-tablet-line"></span>
                <span className="warehouse__details-line"></span>
                <div className="warehouse__details-content-container">
                <div className="warehouse__details-address-left-container">
                    <h3 className="warehouse__details-subheading-1">WAREHOUSE ADDRESS</h3>
                    {/* <p className="warehouse__details-address">{this.state.warehouses.name}</p> */}
                    <h3 className="warehouse__details-subheading-2">CONTACT NAME</h3>
                    <p className="warehouse__details-contact">Grame Lyon<br />Warehouse Manager</p>
                    </div>
                    <div className="warehouse__details-address-right-container">
                    <h3 className="warehouse__details-subheading-3">CONTACT INFORMATION</h3>
                    <p className="warehouse__details-contactinfo">+1(647) 504-0911<br />glyon@instock.com</p>
                    </div>
                </div>
                <div className="warehouse__details-tablet-div">
                    <p className="warehouse__details-tablet-inventory">INVENTORY</p>
                <img className="warehouse__details-tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__details-tablet-category">CATEGORY</p>
                <img className="warehouse__details-tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__details-tablet-status">STATUS</p>
                <img className="warehouse__details-tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__details-tablet-quantity">QUANTITY</p>
                <img className="warehouse__details-tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="warehouse__details-tablet-actions">ACTIONS</p>
            </div>
                {this.state.inventory.map((warehouseInventory) => <WarehouseDetailsCard key={warehouseInventory.id} id={warehouseInventory.id} itemName={warehouseInventory.itemName} status={warehouseInventory.status} category={warehouseInventory.category} quantity={warehouseInventory.quantity}/>)}
            </div>
        </section>
    )
}}

export default WarehouseDetails;

