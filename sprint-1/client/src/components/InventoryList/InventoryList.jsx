import React from 'react';
import  inventoryListListCardMap from '../ inventoryListListCardMap/ inventoryListListCardMap';
import './ inventoryList.scss';
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
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
    state = {warehouses: [], inventories: [], deleteObject: false, deleteInventory: {}, inventoryName: {}, init:0}

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
         showing = (id, name) => {
         this.setState({ deleteObject : true, deleteInventory: id, inventoryName: name})
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

    render () {
      let page;
      if (this.state.deleteObject) {
         page = <div className="deleteItem">
            <Link to="/inventories"><img className="deleteItem__close" src={process.env.PUBLIC_URL + "./assets/icons/close24px.svg"} alt="Close"/></Link>
            <h1 className="deleteItem__title">Delete {this.state.inventoryName} inventory item?</h1>
            <p className="deleteItem__text">Please confirm that you'd like to delete {this.state.inventoryName} from the inventory list.
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
        <section className=" inventoryList">
        <div className=" inventoryList__container">
        <div className=" inventoryList__search-container">
        <h2 className=" inventoryList__header"> inventoryList</h2>
        <div className=" inventoryList__button-container">
        <input className=" inventoryList__search" type='text' placeholder="Search..."/>
            <img className=" inventoryList__search-icon"src={process.env.PUBLIC_URL + '/assets/Icons/search24px.svg'} alt="maginifying glass" />
            <Link to="/add inventoryListitem"><button className=" inventoryList__button">+ Add New Item</button></Link>
            </div>
            </div>
            <div className=" inventoryList__tablet-div">
                <p className=" inventoryList__tablet- inventoryList"> inventoryList ITEM</p>
                <img className=" inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className=" inventoryList__tablet-category">CATEGORY</p>
                <img className=" inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className=" inventoryList__tablet-status">STATUS</p>
                <img className=" inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className=" inventoryList__tablet-quantity">QTY</p>
                <img className=" inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className=" inventoryList__tablet-warehouse">WAREHOUSE</p>
                <img className=" inventoryList__tablet-sorticon" src={process.env.PUBLIC_URL + '/assets/Icons/sort24px.svg'} alt="sort icon"/>
                <p className=" inventoryList__tablet-actions">ACTIONS</p>
            </div>
            {this.state.inventories.map(( inventoryList) => 
            < inventoryListListCardMap key={ inventoryList.id} 
                 id={ inventoryList.id} itemName={ inventoryList.itemName} 
                 warehouseName={ inventoryList.warehouseName} status={ inventoryList.status} 
                 category={ inventoryList.category} quantity={ inventoryList.quantity}/>)}
            </div>
        </section>
        </>
      }
      return(
        <div>{page}</div> 
    )
}}

export default InventoryList;