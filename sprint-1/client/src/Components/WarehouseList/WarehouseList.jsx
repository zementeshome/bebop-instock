import React from 'react';
import './WarehouseList.scss';
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import WarehouseListCard from '../WarehouseListCard/WarehouseListCard';
import WarehouseSearch from '../WarehouseSearch/WarehouseSearch';
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
            </div>
        </section>
        </>
       }
         
    return(
        <div>{page}</div> 
    )}
    }

export default WarehouseList;