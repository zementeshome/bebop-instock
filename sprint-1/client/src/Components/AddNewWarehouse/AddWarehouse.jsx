import React from "react";
import "./addWarehouse.scss";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

export default class AddWarehouse extends React.Component {

state = {
  wareHouseNameEmpty: false,
  streetEmpty: false,
  cityEmpty: false,
  countryEmpty: false,
  contactEmpty:false,
  positionEmpty: false,
  phoneEmpty: false,
  emailEmpty: false
}


   addWarehouse = (e) => {
      e.preventDefault();

      if (e.target.warehouse.value === '') {
        this.setState({ wareHouseNameEmpty: true})
      }  if (e.target.street.value === '')  {
        this.setState({streetEmpty: true})
      } if (e.target.city.value === '')  {
        this.setState({cityEmpty: true})
      } if (e.target.country.value === '')  {
        this.setState({countryEmpty: true})
      } if (e.target.contact.value === '')  {
        this.setState({contactEmpty: true})
      } if (e.target.position.value === '')  {
        this.setState({ positionEmpty: true})
      } if (e.target.phone.value === '')  {
        this.setState({phoneEmpty: true})
      } if (e.target.email.value === '')  {
        this.setState({emailEmpty: true})
      } else {
        axios.post("/", AddWarehouse).then((res) => {
        });
        let addWarehouse = {
          id: uuidv4(),
          name: e.target.warehouse.value,
          address: e.target.street.value,
          city: e.target.city.value,
          country: e.target.country.value,
          contact: {
            name: e.target.contact.value,
            position: e.target.position.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
          },
        };

   }
      
      document.getElementById("form").reset();

    };



  render() {
let isWarehouse; 
let street;
let city;
let country;
let name;
let position;
let phone;
let email;

if (this.state.wareHouseNameEmpty) {
  isWarehouse = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
}  if (this.state.streetEmpty) { 
  street = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
} if (this.state.cityEmpty) { 
  city = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
} if (this.state.countryEmpty) { 
  country = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
}  if (this.state.contactEmpty) { 
  name = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
}  if (this.state.positionEmpty) { 
  position = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
}  if (this.state.phoneEmpty) { 
  phone = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
}  if (this.state.emailEmpty) { 
  email = <div className="add__warehouse-warning-container" > <img className="add__warehouse-warning-img" src="../../assets/icons/error24px.svg" alt="Warning"/> This field is required </div>
} else {
  isWarehouse = <div></div>;
 street= <div></div>; 
 city= <div></div>; 
 country= <div></div>; 
 name= <div></div>; 
 position= <div></div>; 
 phone= <div></div>; 
 email = <div></div>
  
}

    return (
      <div className="add">
        <Header />
        <div className="add__title-container">
       <Link to="/warehouses"><img src="" alt="" /></Link>
          <h2 className="add__title"> <img
            src={process.env.PUBLIC_URL + "./assets/icons/arrow-back24px.svg"}
            alt="Arrow"
          />  Add New Warehouse</h2>
        </div>
        <div className="add__form-container">
          <form
            id="form"
            
            onSubmit={this.addWarehouse}
            className="add__form"
            action=""
          >
            <div className="add__form-container-top">
              <div className="add__warehouse-details">
                <h3 className="add__warehouse-details-title">
                  Warehouse Details
                </h3>
              </div>
              <label className="add__warehouse-input-label" htmlFor="warehouse">
                Warehouse Name
              </label>
              <input
                // id="warehouse-name"
                name="warehouse"
                placeholder="Warehouse Name"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning">{isWarehouse}</div>

              <label className="add__warehouse-input-label" htmlFor="street">
                Street Address
              </label>
              <input
                name="street"
                placeholder="Street Address"
                className="add__warehouse-input"
                type="text"
              />

            <div className="add__warehouse-warning"  >{street}</div>
              <label className="add__warehouse-input-label" htmlFor="city">
                City
              </label>
              <input
                name="city"
                placeholder="City"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{city}</div>
              <label className="add__warehouse-input-label" htmlFor="country">
                Country
              </label>
              <input
                name="country"
                placeholder="Country"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{country}</div>
            </div>
            <div className="add__form-divider"></div>
            <div className="add__form-container-top">
              <div className="add__warehouse-details add__warehouse-details-contact">
                <h3 className="add__warehouse-details-title">
                  Contact Details
                </h3>
              </div>
              <label className="add__warehouse-input-label" htmlFor="contact">
                Contact Name
              </label>
              <input
                name="contact"
                placeholder="Contact Name"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{name}</div>
              <label className="add__warehouse-input-label" htmlFor="cposition">
                Position
              </label>
              <input
                name="position"
                placeholder="Position"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{position}</div>
              <label className="add__warehouse-input-label" htmlFor="number">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="Phone Number"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{phone}</div>
              <label className="add__warehouse-input-label" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                placeholder="Email"
                className="add__warehouse-input"
                type="text"
              />
              <div className="add__warehouse-warning" >{email}</div>
            </div>
            <div className="add__warehouse-btn">
              <Link to="/warehouses"><button className="add__warehouse-btn-cancel">
                <h3 className="add__warehouse-btn-cancel-h3"> Cancel</h3>
              </button></Link>
              <Link to="/warehouses"><button onClick={this.isEmpty}  className="add__warehouse-btn-save">
                <h3 className="add__warehouse-btn-save-h3">+ Add Warehouse</h3>
              </button></Link>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
