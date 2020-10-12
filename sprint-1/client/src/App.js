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
import Header from "./Components/Header/Header"

class App extends React.Component {

  render () {
    return (
      <div className="App">
        {/* <DeleteWarehouse /> */}
        {/* <DeleteInventory /> */}
        {/* <Background /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WarehouseList}/>
            {/* <Route path="/:id" component={WarehouseDetails}/> */}
            {/* <Route path="/editwarehouse" component={EditWarehouse} /> */}
            {/* <Route path="/addwarehouse" component={AddNewWarehouse} /> */}
            {/* <Route path="/inventories" component={InventoryList} /> */}
            {/* <Route path="/inventories/:id" component={InventoryItemDetails} /> */}
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
