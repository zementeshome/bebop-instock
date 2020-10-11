import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";
import InventoryList from "./Components/InventoryList/InventoryList";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import AddNewWarehouse from "./Components/AddNewWarehouse/AddWarehouse";
import InventoryItemDetails from "./Components/InventoryItemDetails/InventoryItemDetails";
import Background from "./Components/Background/Background";
import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";
import AddNewInventoryItem from "./Components/AddNewInventoryItem/AddNewInventoryItem";
import DeleteInventory from "./Components/DeleteInventory/DeleteInventory";
import DeleteWarehouse from "./Components/DeleteWarehouse/DeleteWarehouse";
<<<<<<< HEAD
import Header from "./Components/Header/Header"

class App extends React.Component {
// state={warehouses: []}
// state = {warehouses: [], init:0}

// async componentDidMount() {
//   await axios.get('warehouses')
//   .then((res) => {
//     const warehouses = res.data
//     this.setState({warehouses: warehouses, init:1})
//   })
// console.log(this.state.warehouses);
// };

  render () {
=======
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends React.Component {
  // state={warehouses: []}
  state = { warehouses: [], init: 0 };

  async componentDidMount() {
    await axios.get("warehouses").then((res) => {
      const warehouses = res.data;
      this.setState({ warehouses: warehouses, init: 1 });
    });
    console.log(this.state.warehouses);
  }

  render() {
    const { warehouses } = this.props;
>>>>>>> development
    return (
      <div className="App">
        {/* <DeleteWarehouse /> */}
        {/* <DeleteInventory /> */}
        {/* <Background /> */}
        <BrowserRouter>
          <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={WarehouseList}/>
            <Route path="/:id" component={WarehouseDetails}/>
=======
            {/* <WarehouseList warehouses={this.state.warehouses}/> */}
            <Route
              exact
              path="/"
              render={(props) => (
                <WarehouseList {...props} warehouses={warehouses} />
              )}
            />
            {/* <Route path="/warehouses/:id" warehouses={this.state.warehouses.warehouseInfo} inventory={this.state.inventory} component={WarehouseDetails}/> */}
>>>>>>> development
            {/* <Route path="/editwarehouse" component={EditWarehouse} /> */}
            {/* <Route path="/addwarehouse" component={AddNewWarehouse} /> */}
            {/* <Route path="/inventories" component={InventoryList} /> */}
            <Route path="/warehouses/inventories/:id" component={InventoryItemDetails} />
            <Route path="/inventories/:id" component={InventoryItemDetails} />
            {/* <Route path="/editinventoryitem"  component={EditInventoryItem} /> */}
            {/* <Route path="/addinventoryitem" component={AddNewInventoryItem} /> */}
            {/* <Route path='/pagenotfound' component={PageNotFound} */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
