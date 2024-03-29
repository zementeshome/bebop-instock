import React from 'react'
import WarehouseDetailsCard from '../WarehouseDetailsCard/WarehouseDetailsCard';
import "./WarehouseDetails.scss"
import { Link, matchPath, Redirect, useHistory } from "react-router-dom";
import Header from '../Header/Header';
import axios from "axios";

function getParams(pathname) {
  const matchProfile = matchPath(pathname, {
    path: `/:id`,
  });
  return (matchProfile && matchProfile.params) || {};
};

class WarehouseDetails extends React.Component {
    state = {warehouses: {}, contact: {}, inventories: [], init:0}
    
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
    await axios(config)   
    .then(res => {
        axios(config)
        .then(response => {
            axios(config)
            .then(result => {
                this.setState({
                    contact: response.data.contact,
                    warehouses: res.data, init:1,
                    inventories: result.data.inventories
                })
            })
        })
    })
    .catch(err => {
        console.log(err)
    })}

    componentDidUpdate(PrevState) {
        const { pathname } = this.props.location;
        const prevPathname = PrevState.location.pathname;
        console.log(pathname)
        console.log(prevPathname)

        const currentParams = getParams(pathname);
        const prevParams = getParams(prevPathname);
        
        if (currentParams.id !== prevParams.id) {
          if (currentParams.id !== undefined) {

            const id = currentParams.id;
            const url = 'http://localhost:8080';
            const config = {
            method: 'get',
            url: `${url}/${id}`,
            headers: { },
            data : ''
          };
           // if (this.props.match.params.id !== prevProps.match.params.id) {
              axios
                .get(`${url}/${id}`)
                .then((res) => {
                  this.setState({
                    warehouses: res.data.find(
                      (warehouse) => warehouse["id"] === currentParams.id
                    ),
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            //}
            console.log('you are here 2: ' + currentParams.id)
            this.props.history.push(`${currentParams.id}`);

          }
        }}  
    // componentDidUpdate(prevProps, _prevState) {
    //     const id = this.props.match.params.id;
    //     const url = 'http://localhost:8080';
    //     const config = {
    //     method: 'get',
    //     url: `${url}/warehouses/${id}`,
    //     headers: { },
    //     data : ''
    //   };
    //   console.log(id)
    //     if (this.props.match.params.id !== prevProps.match.params.id) {
    //       axios
    //         .get(`${url}/warehouses/${id}`)
    //         .then((res) => {
    //           this.setState({
    //             warehouses: res.data.find(
    //               (warehouse) => warehouse["id"] === this.props.match.params.id
    //             ),
    //           });
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     }
    // }
  // }
    render() {
    return (
        <section className="warehouse__details">
            <Header />
            <div className="warehouse__details-container">
                <div className="warehouse__details-header-container">
                    <Link to="/"><img className="warehouse__details-arrowicon" 
                          src={process.env.PUBLIC_URL + '/assets/Icons/arrow-back24px.svg'}
                          alt=""/>
                     </Link>
                <h1 className="warehouse__details-header">{this.state.warehouses.name}</h1>
                <div className="warehouse__details-edit-container">
                <div className="warehouse__details-edit-circle">
                    <Link to="/editwarehouse">
                         <img className="warehouse__details-editicon" 
                         src={process.env.PUBLIC_URL + '/assets/Icons/editWhite24px.svg'}
                        fill="#2E66E6" alt=""/>
                    </Link>
                <p className="warehouse__details-edit-text">Edit</p>
                </div>
                </div>
                </div>
                <span className="warehouse__details-tablet-line"></span>
                <span className="warehouse__details-line"></span>
                <div className="warehouse__details-content-container">
                <div className="warehouse__details-address-left-container">
                    <h3 className="warehouse__details-subheading-1">WAREHOUSE ADDRESS</h3>
                    <p className="warehouse__details-address">{this.state.warehouses.address}, {this.state.warehouses.city}, {this.state.warehouses.country}</p>
                    <div className="warehouse__details-contact-div">
                    <h3 className="warehouse__details-subheading-2">CONTACT NAME</h3>
                    <p className="warehouse__details-contact">{this.state.contact.name}, <br />{this.state.contact.position}</p>
                    </div>
                    </div>
                    <div className="warehouse__details-address-right-container">
                    <h3 className="warehouse__details-subheading-3">CONTACT INFORMATION</h3>
                    <p className="warehouse__details-contactinfo">{this.state.contact.phone}<br />{this.state.contact.email}</p>
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
                {this.state.inventories.map((warehouseInventory) => <WarehouseDetailsCard key={warehouseInventory.Id} id={warehouseInventory.id} itemName={warehouseInventory.itemName} status={warehouseInventory.status} category={warehouseInventory.category} quantity={warehouseInventory.quantity}/>)}
            </div>
        </section>
    )}
}

export default WarehouseDetails;

