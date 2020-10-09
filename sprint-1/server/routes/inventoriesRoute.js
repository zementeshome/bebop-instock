// Warehouses route
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

router.use(express.json());
router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// # 11 - Back-End: API to GET List of all Inventory Items starts
router.get("/", (_req, res) => {
   res.status(200).send(inventoriesREQ);
 });
 // # 11 - Back-End: API to GET List of all Inventory Items ends

 // # 10 - Back-End: API to GET a Single Inventory Item starts
 router.get(`/:id`, (req, res) => {
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
// # 10 Back-End: API to GET a Single Inventory Item ends




// # 8 - Back-End: API to POST/CREATE a New Inventory Item 

// Create an API on the back-end using Express and Express Router to allow for the 
// creation of  a new inventory item attached to a given warehouse. All details 
// should come from the front-end.

// New data should be appended to corresponding JSON files (initially provided in the 
// assets package).

// All request body data needs to have validation. All values are required (non-empty). 
// For incorrect/incomplete data, correct error response needs to be sent (with status 
// code and message).

// # 8 - Back-End: API to POST/CREATE a New Inventory Item 
router.post("/", cors(), (req, res) => {
  const {
    id, warehouseID, warehouseName, itemName, description, category, status, quantity
  } = req.body;
  //First we run validations
  if (!id || !warehouseID || !warehouseName || !itemName || !description || !category || !status) {
      // This means that one field was not filled correctly
      return res.status(404).send({  error: "All the fields are required. Don't leave any field in blank.", });
  }
  if (isNaN(quantity)) {
    return res.status(404).send({  error: "Write a valid quantity in numbers.", });
  }
  res.status(200).json(req.body)
    
  // INVENTORIES READS THE DATA WITHIN INVENTORIES.JSON FILE
   const inventories = fs.readFileSync('./data/inventories.json');

   // INVENTORIES JSON CONVERTS TO JSON
   const inventoriesJSON = JSON.parse(inventories);
 
  // PARSE JSON ADDS REQ.BODY
  inventoriesJSON.push(req.body)
  // inventoriesJSON["inventories"].push(req.body)

  // STRINGJSON  CONVERTS INVENTORIESJSON TO STRING 
  const stringJSON = JSON.stringify(inventoriesJSON);

  // FS.WRITE WRITES THE NEW JSON FILE
  fs.writeFileSync('./data/inventories.json',stringJSON, (err) => {
     if (err) return console.log(err);
  });

  inventoriesREQ.push(req.body) //push in inventoriesREQ to see results LIVE
  return res.status(200)
 }
);
// # 8 - Back-End: API to POST/CREATE a New Inventory Item



// # 6 - Back-End: API to DELETE a Inventory - Delete Start here
//app.delete('/inventories/:id', checkInvetoryExists, (req, res) => {
//I am going to create checkInventoryExists function later
router.delete('/:id', cors(), (req, res, next) => {
    const { id } = req.params;
  
    // INVENTORIES READS THE DATA WITHIN INVENTORIES.JSON FILE
    const inventories = fs.readFileSync('./data/inventories.json');
  
    // INVENTORIES JSON CONVERTS TO JSON
    const inventoriesJSON = JSON.parse(inventories);
  
    // PARSE JSON ADDS REQ.BODY
    const inventoryIndex = inventoriesJSON.findIndex(inventories => inventories.id == id);
    if (inventoryIndex >= 0) { 
        inventoriesJSON.splice(inventoryIndex, 1);
  
        // STRINGJSON  CONVERTS INVENTORIESJSON TO STRING 
        const stringJSON = JSON.stringify(inventoriesJSON);
  
        // FS.WRITE WRITES THE NEW JSON FILE
        fs.writeFileSync('./data/inventories.json',stringJSON, (err) => {
            if (err) return console.log(err);
        });
        inventoriesREQ.splice(inventoryIndex, 1); //update also inventoriesREQ to see live the data
        res.sendStatus(200)
        next();
     } else if (inventoryIndex == -1) {
        res.status(404).send({
          error: 'No inventory with that id exists. Try refreshing your inventory web page.'
        });
     } else {
        res.status(404).send({
          error: 'No inventory with that id exists. Try refreshing your inventory web page.'
        });
     }  
  });
  // # 6 - Delete Item Ends here

  module.exports = router;