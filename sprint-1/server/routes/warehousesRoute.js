// Inventories route
// Verbs: GET, POST, PUT, DELETE
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs'); //commonjs format
const { Router } = require('express');
const router = express.Router();
let warehousesREQ = require('../data/warehouses.json');
let inventoriesREQ = require('../data/inventories.json');
const _ = require("lodash");

router.use(express.json());
router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// # 22 - Back-End: API to GET List of All Warehouses starts
router.get("/", (_req, res) => {
  res.status(200).send(warehousesREQ);
});
// # 22 - Back-End: API to GET List of All Warehouses ends

// Ticket 21 && 9
// # 9 - Back-End: API to GET Inventories for a Given Warehouse
// # 21 - Back-End: API to GET a Single Warehouse + the inventories inside that warehouseid
// Similar tickets they were achieved at the same time.
router.get(`/:id`, (req, res) => {
  const { id } = req.params;
  const warehouse = warehousesREQ.find((object) => object.id == id);
  if (warehouse !== undefined) {
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
        email: warehouse.contact.email
      }
    }
    const inventory = inventoriesREQ.filter((object) => object.warehouseID == id);
    if (inventory !== undefined || inventory.id !==  null) {
        //Adding inventories using dot notation
        getWarehouse.inventories = inventory;
    }
    res.status(200).send({
      ...getWarehouse
    });
  } else {
    res.status(404).send({
    error: "No warehouse with that id exists",
   });
}
});
// # 21 - Back-End: API to GET a Single Warehouse ends

//ticket 20
// app.post("/warehouses", (req, res) => {});


//Also you can try directly in server the same DELETE
// # 17 - Back-End: API to DELETE a Warehouse - Delete Start here
//app.delete('/warehouse/:id', checkWarehouseExists, (req, res) => {
//I am going to create checkWarehouseExists function later
router.delete('/:id', cors(), (req, res, next) => {
  const { id } = req.params;

  // WAREHOUSES READS THE DATA WITHIN WAREHOUSES.JSON FILE
  const warehouses = fs.readFileSync('./data/warehouses.json');

  // WAREHOUSES JSON CONVERTS TO JSON
  const warehousesJSON = JSON.parse(warehouses);

  // PARSE JSON ADDS REQ.BODY
  const warehouseIndex = warehousesJSON.findIndex(warehouse => warehouse.id == id);
  if (warehouseIndex >= 0) {
      warehousesJSON.splice(warehouseIndex, 1);

      // STRINGJSON  CONVERTS WAREHOUSESJSON TO STRING 
      const stringJSON = JSON.stringify(warehousesJSON);
  
      // FS.WRITE WRITES THE NEW JSON FILE
      fs.writeFileSync('./data/warehouses.json',stringJSON, (err) => {
          if (err) return console.log(err);
      });
      deleteInvetoriesFromWarehouse(id);
      warehousesREQ.splice(warehouseIndex, 1); //update also inventoriesREQ to see live the data
      res.sendStatus(200)
      next();
  } else if (warehouseIndex == -1) {
    res.status(404).send({
      error: 'No warehouse with that id exists. Try refreshing your warehouse web page.'
    });
  } else {
    res.status(404).send({
      error: 'No warehouse with that id exists. Try refreshing your warehouse web page.'
    });
  }
});
// # 17 - Delete Warehouse Ends here

// # 17 - Delete Inventory from this Warehouse stars
function deleteInvetoriesFromWarehouse(id) {
  // INVENTORIES READS THE DATA WITHIN WAREHOUSES.JSON FILE
  let inventories = fs.readFileSync('./data/inventories.json');

  // INVENTORIESCLEA JSON CONVERTS TO JSON
  let inventoriesJSON = JSON.parse(inventories);

  // PARSE JSON ADDS REQ.BODY
  const inventoryLengh = inventoriesJSON.filter(inventories => inventories.warehouseID == id);
  if (inventoryLengh.lenght > 0 || inventoryLengh !== undefined ) { 

    //p = callback     c =initalValue
     inventoriesJSON = inventoriesJSON.reduce((p,c) => (c.warehouseID !== id && p.push(c),p),[]);

     // STRINGJSON  CONVERTS WAREHOUSESJSON TO STRING 
     const stringJSON = JSON.stringify(inventoriesJSON);

     // FS.WRITE WRITES THE NEW JSON FILE
     fs.writeFileSync('./data/inventories.json',stringJSON, (err) => {
         if (err) return console.log(err);
     });

     inventoriesREQ = inventoriesREQ.reduce((p,c) => (c.warehouseID !== id && p.push(c),p),[]);
    } 
}
// # 17 - Delete Inventory from Warehouse ends

module.exports = router;