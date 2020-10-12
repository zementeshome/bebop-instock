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
// # 4 - Back-End: Diving Deeper - Implement Sorting starts
router.get("/", cors(), async (req, res) => {
  // Statement for sorting
  if(req.query.sortBy && req.query.OrderBy){
     warehousesREQ = sortResultsNestedArrays(warehousesREQ, req.query.sortBy, req.query.OrderBy);  

  // Statement for deep search from back-end
  // if there is any params filter that information
  } else {
     


  } 
  res.status(200).send(warehousesREQ);
});
function sortResults(array, fieldProp, AscDesc) {
  return array.sort(function(a, b) {
      // a = a.toLowerCase();
      // b = b.toLowerCase();
      if (AscDesc === 'asc' || AscDesc === 'ASC' || AscDesc === 'Asc') {
        return (a[fieldProp] > b[fieldProp]) ? 1 : ((a[fieldProp] < b[fieldProp]) ? -1 : 0);
      } else if (AscDesc === 'desc' || AscDesc === 'DESC' || AscDesc === 'Desc'){
        return (b[fieldProp] > a[fieldProp]) ? 1 : ((b[fieldProp] < a[fieldProp]) ? -1 : 0);
      } else {
        return (a[fieldProp] > b[fieldProp]) ? 1 : ((a[fieldProp] < b[fieldProp]) ? -1 : 0);
      }
  });
}
function sortResultsNestedArrays(array, fieldProp, AscDesc) {

  // array.sortcolumn = array.fieldProp;

  // var sorted = [];
  // for (var i = 0; i < words.length; i++) {
  //   sorted.push(words[i].toLowerCase());
  // }
  // sorted.sort();

  fieldProp = fieldProp.split('.');
  var len = fieldProp.length;

  array.sort(function (a, b) {
      var i = 0;
      while( i < len ) { 
           a = a[fieldProp[i]]; 
           b = b[fieldProp[i]]; 
           i++; 
      }
      if (AscDesc === 'asc' || AscDesc === 'ASC' || AscDesc === 'Asc') {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else if (AscDesc === 'desc' || AscDesc === 'DESC' || AscDesc === 'Desc'){
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      }  

  })
  return array;
};
// # 4 - Back-End: Diving Deeper - Implement Sorting ends
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
router.post("/", cors(), (req, res) => {
  function verifyPhone(phone) {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(phone);
  }
  function verifyEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  const { id, name, address, city, country, contact } = req.body;
  if (!id || !name || !address ||  !city || !country || !contact.name ||  !contact.position || !contact.phone || !contact.email) {
    return res.status(404).send({ error: "All the fields are required. Don't leave any field in blank.", })
  } else if (!verifyPhone(contact.phone)) {
    return res.status(404).send({ error: "Please write a valid telephone number.", })
  } else if (!verifyEmail(contact.email)) {
    return res.status(404).send({ error: "Please write a valid email.", })
  }
      
  res.status(200).json(req.body)

  // WAREHOUSES READS THE DATA WITHIN INVENTORIES.JSON FILE
  const warehouses = fs.readFileSync('./data/warehouses.json');

  // WAREHOUSES JSON CONVERTS TO JSON
  const warehousesJSON = JSON.parse(warehouses);

  // PARSE JSON ADDS REQ.BODY
  warehousesJSON.push(req.body)
  // warehousesJSON["warehouses"].push(req.body)

  // STRINGJSON  CONVERTS INVENTORIESJSON TO STRING 
  const stringJSON = JSON.stringify(warehousesJSON);

  // FS.WRITE WRITES THE NEW JSON FILE
  fs.writeFileSync('./data/warehouses.json',stringJSON, (err) => {
      if (err) return console.log(err);
  });

  warehousesREQ.push(req.body) //push in warehousesREQ to see results LIVE
  return res.status(200)
});
// # 20 - Back-End: API to POST/CREATE a New Warehouse

//Also you can try directly in server the same DELETE
// # 17 - Back-End: API to DELETE a Warehouse - Delete Start here
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

  //   Note:  On server.js..
//   1) Add this line at the top: const warehousesRoute = require('./routes/warehousesRoute'); 
//   2) Add this line after the get and post: app.use('/warehouses', warehousesRoute);
