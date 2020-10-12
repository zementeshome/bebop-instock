import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  matchPath,
  Redirect,
  useHistory,
} from "react-router-dom";
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
// import DeleteInventory from "./Components/DeleteInventory/DeleteInventory";
import DeleteWarehouse from "./Components/DeleteWarehouse/DeleteWarehouse";
import Header from "./Components/Header/Header"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import HeaderInventory from './Components/HeaderInventory/HeaderInventory';
class App extends React.Component {

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/editinventoryitem"
              component={EditInventoryItem}
            />
            <Route path="/addinventoryitem" component={AddNewInventoryItem} />
            <Route exact path="/editwarehouse" component={EditWarehouse} />
            <Route path="/addwarehouse" component={AddNewWarehouse} />
            <Route exact path="/" component={WarehouseList} />
            <Route exact path="/inventories" component={InventoryList} />
            <Route exact path="/:id" component={WarehouseDetails} />
            <Route
              exact
              path="/inventories/:id"
              component={InventoryItemDetails}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
