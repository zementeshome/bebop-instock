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
const _ = require("lodash");

router.use(express.json());
router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// # 11 - Back-End: API to GET List of all Inventory Items starts
// # 4 - Back-End: Diving Deeper - Implement Sorting starts
router.get('/', cors(), async (req,res) => {
  //const _ispublished = req.query.published;
  const match = {}
  const sort  = {}

  // if(req.query.published){
  //     match.published = req.query.published === 'true'
  // }

  if(req.query.sortBy && req.query.OrderBy){
     inventoriesREQ = sortResults(inventoriesREQ, req.query.sortBy, req.query.OrderBy);  
  
  // Statement for deep search from back-end
  // if there is any params filter that information
  } else { 
 
  }
  res.status(200).send(inventoriesREQ);
})
function sortResults(array, fieldProp, AscDesc) {
  return array.sort(function(a, b) {
      if (AscDesc === 'asc' || AscDesc === 'ASC' || AscDesc === 'Asc') {
        return (a[fieldProp] > b[fieldProp]) ? 1 : ((a[fieldProp] < b[fieldProp]) ? -1 : 0);
      } else if (AscDesc === 'desc' || AscDesc === 'DESC' || AscDesc === 'Desc'){
        return (b[fieldProp] > a[fieldProp]) ? 1 : ((b[fieldProp] < a[fieldProp]) ? -1 : 0);
      } else {
        return (a[fieldProp] > b[fieldProp]) ? 1 : ((a[fieldProp] < b[fieldProp]) ? -1 : 0);
      }
  });
}
// # 11 - Back-End: API to GET List of all Inventory Items ends
// # 4 - Back-End: Diving Deeper - Implement Sorting ends

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
// # 10 - Back-End: API to GET a Single Inventory Item ends

// # 8 - Back-End: API to POST/CREATE a New Inventory Item 
router.post("/", cors(), (req, res) => {
  const {
    id, warehouseID, warehouseName, itemName, description, category, status, quantity
  } = req.body;
  //First we run validations
  if (!id || !warehouseID || !warehouseName || !itemName || !description || !category || !status) {
      // This means that one field was not filled correctly
      return res.status(404).send({ error: "All the fields are required. Don't leave any field in blank.", });
  } 
  // Before asking is a Number we need to parsefloat and treat quantity as a number
  if (isNaN(parseFloat(quantity))) {
    return res.status(404).send({ error: "Write a valid quantity in numbers.", });
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

// # 7 - Back-End: API to PUT/PATCH/EDIT an Inventory Item stars
router.patch('/:id', cors(), (req, res) => {
  console.log(req.body)
  if (req.body !== undefined) {
    const id = req.params.id; 
    let { warehouseID, warehouseName, itemName, description, 
            category, status, quantity } = req.body;

    // INVENTORIES JSON CONVERTS TO JSON
    const inventories = fs.readFileSync('./data/inventories.json');
    // INVENTORIES JSON CONVERTS TO JSON
    const inventoriesJSON = JSON.parse(inventories);

   // PARSE JSON ADDS REQ.BODY
    const inventory = inventoriesREQ.find((object) => object.id === id);
    const inventoryIndex = 
       inventoriesJSON.findIndex(inventories => inventories.id == id);
    if (inventoryIndex >= 0) { 
        if (warehouseID || warehouseName ) {
          inventory.warehouseName = warehouseName;
        }
        if (itemName ){ inventory.itemName = itemName; }
        if (description){ inventory.description = description; }
        if (category) { inventory.category = category; } 
        if (status || quantity){
          if (quantity > 0 ) {
            status = "In Stock"
          } else {
            quantity = 0;
            status = "Out of Stock"
          }
          if (quantity === undefined) {
              quantity = 0;
              status = "Out of Stock"
          }
          inventory.status = status;
          inventory.quantity = quantity;
        }
        inventoriesJSON.splice(inventoryIndex, 0, inventory);
  
        // STRINGJSON  CONVERTS INVENTORIESJSON TO STRING 
        const stringJSON = JSON.stringify(inventoriesJSON);

        // FS.WRITE WRITES THE NEW JSON FILE
        fs.writeFileSync('./data/inventories.json',stringJSON, (err) => {
          if (err) return console.log(err);
        });

        //inventoriesREQ.splice(inventoryIndex, 0, inventory); //update also inventoriesREQ to see live the data

        res.status(200).json(req.body)

     } else {
      return res.status(404).send({ error: "Edit not completed. Please refresh this page and edit again.", });
     }
  } else {
     return res.status(404).send({ error: "Fields are required. Don't leave any field in blank.", });
  }
});
// # 7 - Back-End: API to PUT/PATCH/EDIT a Inventories ends

// # 6 - Back-End: API to DELETE a Inventory - Delete Start here
//app.delete('/inventories/:id', checkInvetoryExists, (req, res) => {
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