import React from 'react';
import InventoryListCard from '../InventoryListCard/InventoryListCard';
import './InventoryList.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header'

class InventoryList extends React.Component {
    state = {warehouses: [], inventories: [], init:0}

    async componentDidMount() {
        // const id = this.props.match.params.id;
        // console.log(id);
        const url = 'http://localhost:8080';
        const config = {
            method: 'get',
            url: `${url}/inventories`,
            headers: { },
            data : ''
          };
        //   console.log(config);
        await axios(config)   
        .then(res => {
            axios(config)
            .then(response => {
                axios(config)
                .then(result => {
                    this.setState({
                        warehouses: res.data, init:1,
                        inventories: result.data.inventories
                    })
                })
                // this.setState({
                //     contact: response.data.contact,
                //     warehouses: res.data, init:1
                // })
            })
        })
        .catch(err => {
            console.log(err)
        })}

        componentDidUpdate(prevProps, _prevState) {
            const id = this.props.match.params.id;
            const url = 'http://localhost:8080';
            const config = {
            method: 'get',
            url: `${url}/inventories/${id}`,
            headers: { },
            data : ''
          };
            if (this.props.match.params.id !== prevProps.match.params.id) {
              axios
                .get(`${url}/inventories/${id}`)
                .then((res) => {
                  this.setState({
                    inventories: res.data.find(
                      (inventories) => inventories["id"] === this.props.match.params.id
                    ),
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }

    render () {
    return (
        <>
        <Header />
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
            {/* {this.state.inventories.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)} */}
            </div>
        </section></>
    )}
}

export default InventoryList;
