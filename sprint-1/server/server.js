const express = require("express");
const app = express();

let warehousesREQ = require("./data/warehouses.json");
let inventoriesREQ = require("./data/inventories.json");
const bodyParser = require("body-parser");
const fs = require("fs"); //commonjs format
//Routes to Warehouses and Inventories
const warehousesRoute = require("./routes/warehousesRoute");
const inventoriesRoute = require("./routes/inventoriesRoute");

const cors = require("cors");

app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/warehouses", (_req, res) => {
  res.send(warehousesREQ);
});

app.get(`/warehouses/:id`, (req, res) => {
  const warehouse = warehousesREQ.find((object) => object.id === req.params.id);
  const inventory = inventoriesREQ.find(
    (object) => object.id === req.params.id
  );
  if (warehouse !== undefined) {
    res.status(200).send({
      id: warehouse.id,
      name: warehouse.name,
      address: warehouse.address,
      city: warehouse.city,
      country: warehouse.country,
      contact: {
        name: warehouse.contact.name,
        position: warehouse.contact.position,
        phone: warehouse.contact.phone,
        email: warehouse.contact.email,
      }, //,
      // id: inventory.id,
      // warehouseID: inventory.warehouseID,
      // warehouseName: inventory.warehouseName,
      // itemName: inventory.itemName,
      // description: inventory.description,
      // category: inventory.category,
      // status: inventory.status,
      // quantity: inventory.quantity
    });
  } else {
    res.status(404).send({
      error: "No warehouse with that id exists",
    });
  }
});

app.get("/inventories", (_req, res) => {
  res.send(inventoriesREQ);
});

app.get(`/inventories/:id`, (req, res) => {
  const inventory = inventoriesREQ.find(
    (object) => object.id === req.params.id
  );
  if (inventory !== undefined) {
    res.status(200).send({
      id: inventory.id,
      warehouseID: inventory.warehouseID,
      warehouseName: inventory.warehouseName,
      itemName: inventory.itemName,
      description: inventory.description,
      category: inventory.category,
      status: inventory.status,
      quantity: inventory.quantity,
    });
  } else {
    res.status(404).send({
      error: "No inventory with that id exists",
    });
  }
});

// # 17 - Back-End: API to DELETE a Warehouse - Delete Start here
app.use("/warehouses", warehousesRoute);

// # 6 - BBack-End: API to DELETE an Inventory Item
app.use("/inventories", inventoriesRoute);

app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");

const warehouses = require("./data/warehouses.json");
const inventories = require("./data/inventories.json");

//ticket 22
app.get("/warehouses", (_req, res) => {
  res.send(warehouses);
});

//ticket 21 && 9
app.get(`/warehouses/:id`, (req, res) => {
  const warehouse = warehouses.find((object) => object.id === req.params.id);
  const inventory = inventories.find((object) => object.id === req.params.id);
  let getWarehouse = {
    id: warehouse.id,
    name: warehouse.name,
    address: warehouse.address,
    city: warehouse.city,
    country: warehouse.country,
    contact: {
      name: warehouse.contact.name,
      position: warehouse.contact.position,
      phone: warehouse.contact.phone,
      email: warehouse.contact.email,
    },
  };
  let getInventory = {
    id: inventory.id,
    warehouseID: inventory.warehouseID,
    warehouseName: inventory.warehouseName,
    itemName: inventory.itemName,
    description: inventory.description,
    category: inventory.category,
    status: inventory.status,
    quantity: inventory.quantity,
  };

  res.send({
    getWarehouse,
    getInventory,
  });
});

//ticket 20
app.post("/warehouses", (req, res) => {});

//ticket 11
app.get("/inventories", (_req, res) => {
  res.send(inventories);
});

//ticket 10
app.get("/inventories", (_req, res) => {
  const inventory = inventories.find((object) => object.id === req.params.id);
  let getInventoryItem = {
    id: inventory.id,
    warehouseID: inventory.warehouseID,
    warehouseName: inventory.warehouseName,
    itemName: inventory.itemName,
    description: inventory.description,
    category: inventory.category,
    status: inventory.status,
    quantity: inventory.quantity,
  };
  res.send(getInventoryItem);
});

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});
