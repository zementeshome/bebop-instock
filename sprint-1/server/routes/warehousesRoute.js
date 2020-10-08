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



// # 20 - Back-End: API to POST/CREATE a New Warehouse
// Create an API on the backend using Express and Express Router to create a new warehouse based on the 
// user inputs provided in the front-end.

// New data should be appended to corresponding JSON files (initially provided in the assets package).

// All request body data needs to have validation. All values are required (non-empty). For Phone Number a
// nd Email fields validate correct phone number and email. For incorrect/incomplete data, correct error 
// response needs to be sent (with status code and message).

// STILL TESTING POST - KALEB WORKING ON POST AND VALIDATIONS
// # 20 - Back-End: API to POST/CREATE a New Warehouse
router.post("/", (req, res) => {
  function validatePhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(phone);
    }
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  if (req.body.warehouse !== '' || req.body.warehouse !== undefined || req.body.warehouse !== null &&
      req.body.street !== '' || req.body.street !== undefined || req.body.street !== null &&
      req.body.city !== '' || req.body.city !== undefined || req.body.city !== null &&
      req.body.country !== '' || req.body.country !== undefined || req.body.country !==  null &&
      req.body.contact !== '' || req.body.contact !==  undefined || req.body.contact !== null &&
      req.body.position !==req.body.position !==  undefined || req.body.position !== null &&
      req.body.phone !== '' || req.body.phone !==  undefined || req.body.phone !== null &&
      validatePhone(req.body.phone) && 
      validateEmail(req.body.email) &&
      req.body.email !== '' || req.body.email !== undefined || req.body.email !== null)
      {warehousesREQ.push(req.body)}
      else {
          res.status(404).send({
            error: "This field is required",
          });
      }
});
// # 20 - Back-End: API to POST/CREATE a New Warehouse


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