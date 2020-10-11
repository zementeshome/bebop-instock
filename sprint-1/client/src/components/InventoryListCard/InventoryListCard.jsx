import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class InventoryListCard extends Component {
    state = {warehouses: {}, inventories: [], init:0}
    
    async componentDidMount() {
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id;
    console.log(id);
    const url = 'http://localhost:8080';
    const config = {
        method: 'get',
        url: `${url}/inventories/${id}`,
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
            .then((result) => {
              this.setState({
                inventories: result.data.find(
                  (inventory) => inventory["id"] === this.props.match.params.id
                ),
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }

    render() {
        return (
            <section className="inventory">
                  <span className="inventory__line"></span>
             <div className="inventory__content-container">
                 <div className="inventory__left-container">
                 <h3 className="inventory__sub-heading">INVENTORY ITEM</h3>
                <Link to={`/inventories/${this.state.id}`}><p className="inventory__item">{this.props.itemName}</p></Link>
                <img className="inventory__arrow" src={process.env.PUBLIC_URL + '/assets/Icons/chevronright24px.svg'} alt="right arrow"/>
                <h3 className="inventory__sub-heading">CATEGORY</h3>
                <p className="inventory__category">{this.props.category}</p>
                </div>
                <div className="inventory__right-container">
                 <h3 className="inventory__sub-heading">STATUS</h3>
                 <p className="inventory__status">{this.props.status}</p>
                 <h3 className="inventory__sub-heading">QTY</h3>
                <p className="inventory__quantity">{this.props.quantity}</p>
                <h3 className="inventory__sub-heading">WAREHOUSE</h3>
                <p className="inventory__warehouse">{this.props.warehouseName}</p>
             </div>
             </div>
             <span className="inventory__underline-tablet"></span>
             <div className="inventory__icon-container">
             <img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/deleteoutline24px.svg'} alt="delete icon"/>
                <Link to="/editinventoryitem"><img className="inventory__delete-icon" src={process.env.PUBLIC_URL + '/assets/Icons/edit24px.svg'} alt="edit icon"/></Link>
                </div>
             </section>
        )
    }
}

export default InventoryListCard;
