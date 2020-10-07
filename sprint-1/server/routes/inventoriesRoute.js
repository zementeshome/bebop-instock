// # 6 - Back-End: API to DELETE an Inventory Item

// Create an API on the back-end using Express and Express
// Router to allow the deletion of a single inventory item.

// Data should be deleted from the corresponding JSON files 
// (initially provided in the assets package).

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

//   Note:  On server.js..
//   1) Add this line at the top: const inventoriesRoute = require('./routes/inventoriesRoute'); 
//   2) Add this line after the get and post: app.use('/inventories', inventoriesRoute);