// import React from './node_modules/react';
import React from 'react';
// import  InventoryListCardMap from '../InventoryListCardMap/InventoryListCardMap';
import InventoryListCard from '../InventoryListCard/InventoryListCard';
import './InventoryList.scss';
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';
import HeaderInventory from '../HeaderInventory/HeaderInventory';
function getParams(pathname) {
  const matchProfile = matchPath(pathname, {
    path: `inventories`,
  });
  return (matchProfile && matchProfile.params) || {};
};
class  InventoryList extends React.Component {
    state = {inventories: [], init:0, search:[]}

    //  onSearchChange = (searchText) => {
    //     if (searchText !== '') {
    //         searchText = searchText.toLowerCase();
    //         const filteredWarehouses = this.state.inventories.filter(inventory => inventory.itemName.toLowerCase().includes(searchText) || inventory.warehouseName.toLowerCase().includes(searchText) || inventory.status.toLowerCase().includes(searchText) || inventory.category.toLowerCase().includes(searchText))
    //         this.setState({
    //             search: filteredWarehouses
    //         })
    //     } else {
    //         this.setState({
    //             search: ''
    //         })
    //     }
    // }

   componentDidMount() {
        // const id = this.props.match.params.id;
        // console.log(id);
        const url = 'http://localhost:8080';
        const config = {
            method: 'get',
            url: `${url}/inventories`,
            headers: { },
            data : ''
          };
         axios(config)   
            .then(res => {
              //console.log(res.data) /// working herer data 70 inventories objects OK
              const inventories = res.data
              this.setState({ inventories: res.data, init: 1  })
            })
        .catch(err => {
            console.log(err)
    })
  }
        // componentDidUpdate(PrevState) {
        //   console.log('you are here 222')
        //   const { pathname } = this.props.location;
        // const prevPathname = PrevState.location.pathname;
        // console.log(pathname)
        // console.log(prevPathname)
        // const currentParams = getParams(pathname);
        // const prevParams = getParams(prevPathname);
        // if (currentParams.id !== prevParams.id) {
        //   if (currentParams.id !== undefined) {
        //     const id = currentParams.id;
        //     const url = 'http://localhost:8080';
        //     const config = {
        //     method: 'get',
        //     url: `${url}/${id}`,
        //     headers: { },
        //     data : ''
        //   };
        //    // if (this.props.match.params.id !== prevProps.match.params.id) {
        //       axios
        //         .get(`${url}/${id}`)
        //         .then((res) => {
        //           this.setState({
        //             inventories: res.data.find(
        //               ( inventoryList) =>  inventoryList["id"] === currentParams.id
        //             ),
        //           });
        //         })
        //         .catch((err) => {
        //           console.log(err);
        //         });
        //     //}
        //     console.log('you are here 2K: ' + currentParams.id)
        //     this.props.history.push(`${currentParams.id}`);
        //   }
        // }   
        //   //   const id = this.props.match.params.id;
        //   //   const url = 'http://localhost:8080';
        //   //   const config = {
        //   //   method: 'get',
        //   //   url: `${url}/inventories/${id}`,
        //   //   headers: { },
        //   //   data : ''
        //   // };
        //   //   if (this.props.match.params.id !== prevProps.match.params.id) {
        //   //     axios
        //   //       .get(`${url}/inventories/${id}`)
        //   //       .then((res) => {
        //   //         this.setState({
        //   //           inventories: res.data.find(
        //   //             (inventories) => inventories["id"] === this.props.match.params.id
        //   //           ),
        //   //         });
        //   //       })
        //   //       .catch((err) => {
        //   //         console.log(err);
        //   //       });
        //   //   }
        //   }
    render (/*onSearchChange*/) {


      return (
        <>
        <HeaderInventory />
        <section className="inventoryList">
        <div className="inventoryList__container">
        <div className="inventoryList__search-container">
        <h2 className="inventoryList__header">Inventory</h2>
        <div className="inventoryList__button-container">
        <input className="inventoryList__search" type='text' placeholder="Search..." style={{ fontFamily: 'Titillium Web', fontSize: '13px'}} /*onChange={(e) => onSearchChange(e.target.value)}*//>
            <img className="inventoryList__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <Link to="/add inventoryListitem" style={{textDecoration: 'none'}}><button className="inventoryList__button"><span>+ Add New Item</span></button></Link>
            </div>
            </div>
            <div className="inventoryList__tablet-div">
            <h3 className="inventoryList__tablet-category">INVENTORY ITEM</h3>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-category">CATEGORY</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-status">STATUS</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-quantity">QTY</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-warehouse">WAREHOUSE</p>
                <img className="inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className="inventoryList__tablet-actions">ACTIONS</p>
            </div>
            {this.state.inventories.map(( inventoryList) => 
            < InventoryListCard key={ inventoryList.id} 
                 id={ inventoryList.id} itemName={ inventoryList.itemName} 
                 warehouseName={ inventoryList.warehouseName} status={ inventoryList.status} 
                 category={ inventoryList.category} quantity={ inventoryList.quantity}/>)}
            </div>
        </section>
        </>
    )}
}
export default InventoryList;






