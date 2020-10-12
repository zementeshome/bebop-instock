import React from 'react';
import './WarehouseList.scss';
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import WarehouseListCard from '../WarehouseListCard/WarehouseListCard';
import WarehouseSearch from '../WarehouseSearch/WarehouseSearch';
<<<<<<< HEAD
import './WarehouseList.scss';

class WarehouseList extends React.Component {
    state = {
        
        warehouses: {

           warehouseInfo: [ 
                {id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
                name: 'Manhattan',
                address: '503 Broadway',
                city: 'New York',
                country: 'USA', 
                contact: {
                    name: 'Parmin Aujla',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'paujla@instock.com'
                }
              },
              {
                id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
                name: 'King West',
                address: '469 King Street West',
                city: 'Toronto',
                country: 'CAN', 
                contact: {
                    name: 'Greame Lyon',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'glyon@instock.com'
                }  
              },
              {
                id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
                name: 'Granville',
                address: '55 Granville Street',
                city: 'Vancouver',
                country: 'CAN', 
                contact: {
                    name: 'Brad MacDonald',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'bmcdonald@instock.com'
                }  
              },
              {
                id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4"',
                name: 'San Fran',
                address: '890 Brannnan Street',
                city: 'San Francisco',
                country: 'USA', 
                contact: {
                    name: 'Gary Wong',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'gwong@instock.com"'
                }  
              },
              {
                id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
                name: 'Santa Monica',
                address: '520 Broadway',
                city: 'Santa Monica',
                country: 'USA', 
                contact: {
                    name: 'Sharon Ng',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'sng@instock.com'
                }  
              },
              {
                id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
                name: 'Seattle',
                address: '1201 Third Avenue',
                city: 'Seattle',
                country: 'USA', 
                contact: {
                    name: 'Daniel Bachu',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'dbachu@instock.com'
                }  
              },
              {
                id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
                name: 'Montreal',
                address: '1125 Stanley Street',
                city: 'Montreal',
                country: 'CAN', 
                contact: {
                    name: 'Alana Thomas',
                    position: 'Warehouse Manager',
                    phone: '+1 (646) 123-1234',
                    email: 'athomas@instock.com'
                }  
              }
           ]
        }

    }
    render() {
    return(
        <section className="warehouse">
            <div className="warehouse__container">
            <WarehouseSearch />
                {this.state.warehouses.warehouseInfo.map((warehouseDetails) => <WarehouseListCard key={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email}/>)}
=======
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import Header from '../Header/Header';
import Background from '../Background/Background';
import axios from "axios";
import "../DeleteWarehouse/DeleteWarehouse.scss";


 class WarehouseList extends React.Component {
    state = {warehouses: [], deleteObject: false, deleteWarehouse: {}, warehouseName: {}, init:0}

     deleteObject = (event) => {
         event.preventDefault();
         const url = 'http://localhost:8080';
         const id = this.state.deleteWarehouse;
         this.setState({deleteWarehouse: event.target.id})
        let config = {
            method: 'delete',
            url: `${url}/warehouses/${id}`,
            header: {},
            payload: this.state.deleteWarehouse
            };
        axios(config)
        .then( response => {
            const notShowing = () => {
                this.setState({ deleteObject: false})
              }
            notShowing();
            const reloadPage = () => {
                window.location.reload(false)
            }
            reloadPage();
        })
        .catch( error => {
            console.log(error);
        })
    }
            showing = (id, name) => {
            this.setState({ deleteObject : true, deleteWarehouse: id, warehouseName: name})
            }
            
            notShowing = () => {
              this.setState({ deleteObject: false})
            }
            reloadPage = () => {
                window.location.reload(false)
            }

    async componentDidMount() {
      await axios.get('warehouses')
      .then((res) => {
        const warehouses = res.data
        this.setState({warehouses: warehouses, init:1})
      })
    };
    render () {
     
        let page;
        if (this.state.deleteObject) {
         page = <div className="deleteWarehouse">
            <img className="deleteWarehouse__close" src={process.env.PUBLIC_URL + "./assets/icons/close24px.svg"} onClick={this.notShowing} alt="Close"/>
            <h1 className="deleteWarehouse__title">Delete {this.state.warehouseName} warehouse?</h1>
            <p className="deleteWarehouse__text">Please confirm that you'd like to delete the {this.state.warehouseName} from the list of warehouses.
            You won't be able to undo this action.</p>
            <div className="deleteWarehouse-buttons">
                <button className="deleteWarehouse-buttons__cancel" type="submit" onClick={this.notShowing}>Cancel</button>
                <button className="deleteWarehouse-buttons__delete" type="submit" onClick={this.deleteObject}>Delete</button>
            </div>
        </div>
        }
        else { 
            page = <>
            <Header />
            <section className="warehouse">
            <div className="warehouse__container">
            <WarehouseSearch />
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
                {this.state.warehouses && this.state.warehouses.map((warehouseDetails) => <WarehouseListCard deleteObject={this.deleteObject} showing={this.showing} key={warehouseDetails.id} id={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email}/>)}
>>>>>>> development
            </div>
        </section>
        </>
       }
         
    return(
        <div>{page}</div> 
    )}
    }

export default WarehouseList;