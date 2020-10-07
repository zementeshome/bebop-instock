import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <Header />
      <EditWarehouse />
      {/* <WarehouseList /> */}
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
