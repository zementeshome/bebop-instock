import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import AddNewWarehouse from "./Components/AddNewWarehouse/AddWarehouse";
import InventoryItemDetails from "./Components/InventoryItemDetails/InventoryItemDetails";
import Background from "./Components/Background/Background";
import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";
import AdDNewInventoryItem from "./Components/AddNewInventoryItem/AddNewInventoryItem";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddNewInventoryItem from "./Components/AddNewInventoryItem/AddNewInventoryItem";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <WarehouseList /> */}
      {/* <EditWarehouse /> */}
      {/* <WarehouseList /> */}
      <AddNewWarehouse />
      {/* <InventoryItemDetails /> */}
      {/* <EditInventoryItem /> */}
      {/* <AddNewInventoryItem /> */}
      {/* <Background /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
          <Route path="/" exact component={() => <route />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
