import React from 'react';
import WarehouseListCard from '../WarehouseListCard/WarehouseListCard';
import WarehouseSearch from '../WarehouseSearch/WarehouseSearch';
import './WarehouseList.scss';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';

class WarehouseList extends React.Component {
    state = {
        deleteObject: false,
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
    componentDidMount() {
      this.setState({deleteObject: false})
    }

    componentDidUpdate(PrevState) {
      console.log(PrevState);
      // if (PrevParams.deleteObject != CurrentParams.deleteObject) {}
    }

    render() {
    return(
        <section className="warehouse">
            <div className="warehouse__container">
            <WarehouseSearch />
                {this.state.warehouses.warehouseInfo.map((warehouseDetails) => <WarehouseListCard key={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email}/>)}
            <DeleteWarehouse deleteObject={this.state.deleteObject}/>    
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
                {props.warehouses.map((warehouseDetails) => <WarehouseListCard key={warehouseDetails.id} name={warehouseDetails.name} contact={warehouseDetails.contact.name} address={warehouseDetails.address} addressCity={warehouseDetails.city} addressCountry={warehouseDetails.country} contactPhone={warehouseDetails.contact.phone} contactEmail={warehouseDetails.contact.email}/>)}
            </div>
        </section>
    )
    }
  }
export default WarehouseList;