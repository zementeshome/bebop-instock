// import React from './node_modules/react';
import React, { useState } from 'react';
import InventoryListCard from '../InventoryListCard/InventoryListCard';
import './InventoryList.scss';
import '../DeleteInventory/DeleteInventory.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header'

// function InventoryList(props) {
//     let [inventoryData, setInventoryData] = useState(props.manhattan)
//     const onSearchChange = (searchText) => {
//         if (searchText === '') { setInventoryData(props.manhattan) }
//         else {
//             // console.log(props.manhattan);
//             searchText = searchText.toLowerCase();
//             const filteredInventory = props.manhattan.filter(inventory => inventory.itemName.toLowerCase().includes(searchText) || inventory.warehouseName.toLowerCase().includes(searchText) || inventory.status.toLowerCase().includes(searchText) || inventory.category.toLowerCase().includes(searchText));
//             // console.log('filtered', filteredWareHouses);
//             setInventoryData(filteredInventory);

//             // || inventory.quantity.includes(searchText) not working for quantity
//         }
//         // console.log(searchText);
//     }
class InventoryList extends React.Component {
    state = {warehouses: [], inventories: [], deleteObject: false, deleteInventory: {}, init:0}

    deleteObject = (event) => {
      event.preventDefault();
      const url = 'http://localhost:8080';
      const id = this.state.deleteInventory;
      this.setState({deleteInventory: event.target.id})
     let config = {
         method: 'delete',
         url: `${url}/inventories/${id}`,
         header: {},
         payload: this.state.deleteInventory
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
         showing = (id) => {
         this.setState({ deleteObject : true, deleteInventory: id})
         }
         
         notShowing = () => {
           this.setState({ deleteObject: false})
         }
         reloadPage = () => {
             window.location.reload(false)
         }

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
      let page;
        if (this.state.deleteObject) {
         page = <div className="deleteItem">
            <Link to="/inventories"><img className="deleteItem__close" src={process.env.PUBLIC_URL + "./assets/icons/close24px.svg"} alt="Close"/></Link>
            <h1 className="deleteItem__title">Delete {}Television inventory item?</h1>
            <p className="deleteItem__text">Please confirm that you'd like to delete Television{} from the inventory list.
            You won't be able to undo this action.</p>
            <div className="deleteItem-buttons">
                <button className="deleteItem-buttons__cancel" type="submit" onClick={this.notShowing}>Cancel</button>
                <button className="deleteItem-buttons__delete" type="submit" onClick={this.deleteObject}>Delete</button>
            </div>
        </div>
        }
        else {
         page= <>
        <Header />
        <section className="inventory">
        <div className="inventory__container">
        <div className="inventory__search-container">
        <h2 className="inventory__header">Inventory</h2>
        <div className="inventory__button-container">
        <input className="inventory__search" type='text' placeholder="Search..." style={{ fontFamily: 'Titillium Web', fontSize: '13px'}} /*onChange={(e) => onSearchChange(e.target.value)}*//>
            <img className="inventory__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <Link to="/addinventoryitem"><button className="inventory__button"><span>+ Add New Item</span></button></Link>
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
            {/* {inventoryData.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)} */}
            {/* {this.state.inventories.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)} */}
            </div>
        </section>
        </>
        }
    return (
      <div>{page}</div>
        // <>
        // <Header />
        // <section className="inventory">
        // <div className="inventory__container">
        // <div className="inventory__search-container">
        // <h2 className="inventory__header">Inventory</h2>
        // <div className="inventory__button-container">
        // <input className="inventory__search" type='text' placeholder="Search..." style={{ fontFamily: 'Titillium Web', fontSize: '13px'}} /*onChange={(e) => onSearchChange(e.target.value)}*//>
        //     <img className="inventory__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
        //     <Link to="/addinventoryitem"><button className="inventory__button"><span>+ Add New Item</span></button></Link>
        //     </div>
        //     </div>
        //     <div className="inventory__tablet-div">
        //         <p className="inventory__tablet-inventory">INVENTORY ITEM</p>
        //         <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
        //         <p className="inventory__tablet-category">CATEGORY</p>
        //         <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
        //         <p className="inventory__tablet-status">STATUS</p>
        //         <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
        //         <p className="inventory__tablet-quantity">QTY</p>
        //         <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
        //         <p className="inventory__tablet-warehouse">WAREHOUSE</p>
        //         <img className="inventory__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
        //         <p className="inventory__tablet-actions">ACTIONS</p>
        //     </div>
        //     {/* {inventoryData.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)} */}
        //     {/* {this.state.inventories.map((manhattanDetails) => <InventoryListCard key={manhattanDetails.id} id={manhattanDetails.id} itemName={manhattanDetails.itemName} warehouseName={manhattanDetails.warehouseName} status={manhattanDetails.status} category={manhattanDetails.category} quantity={manhattanDetails.quantity}/>)} */}
        //     </div>
        // </section></>
    )}
}

export default InventoryList;
