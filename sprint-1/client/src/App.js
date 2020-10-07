import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddNewWarehouse from "./components/AddNewWarehouse/AddWarehouse";

function App() {
  return (
    <div className="App">
      <Header />
      <WarehouseList />
      {/* <EditWarehouse /> */}
      {/* <WarehouseList /> */}
      <AddNewWarehouse />
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
