// const express = require("express");
// const app = express();
// let warehousesREQ = require("./data/warehouses.json");
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// app.post("/warehouses", (req, res) => {
//     function validatePhone(phone) {
//         const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//         return re.test(phone);
//       }
//     function validateEmail(email) {
//         const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(email);
//       }
//     if (req.body.warehouse !== '' || req.body.warehouse !== undefined || req.body.warehouse !== null &&
//         req.body.street !== '' || req.body.street !== undefined || req.body.street !== null &&
//         req.body.city !== '' || req.body.city !== undefined || req.body.city !== null &&
//         req.body.country !== '' || req.body.country !== undefined || req.body.country !==  null &&
//         req.body.contact !== '' || req.body.contact !==  undefined || req.body.contact !== null &&
//         req.body.position !==req.body.position !==  undefined || req.body.position !== null &&
//         req.body.phone !== '' || req.body.phone !==  undefined || req.body.phone !== null &&
//         validatePhone(req.body.phone) !==  false && 
//         validateEmail(req.body.email) !== false &&
//         req.body.email !== '' || req.body.email !== undefined || req.body.email !== null)
//         {warehousesREQ.push(req.body)}
//         else {
//             res.status(404).send({
//               error: "This field is required",
//             });}
//         });
         // Hector please merge with warehousesRoute.js

         const express = require('express');
         const app = express();
         const cors = require('cors');
         const bodyParser = require('body-parser');
         const fs = require('fs'); //commonjs format
         const { Router } = require('express');
         const router = express.Router();
         let warehousesREQ = require('../data/warehouses.json');
         
         router.use(express.json());
         router.use(cors());
         
         router.use(bodyParser.urlencoded({ extended: false }));
         router.use(bodyParser.json());

         router.post("/warehouses", cors(), (req, res, next) => {
            //First we run validations
            if (req.body.warehouse !== '' || req.body.warehouse !== undefined || req.body.warehouse !== null &&
                req.body.street !== '' || req.body.street !== undefined || req.body.street !== null &&
                req.body.city !== '' || req.body.city !== undefined || req.body.city !== null &&
                req.body.country !== '' || req.body.country !== undefined || req.body.country !==  null &&
                req.body.contact !== '' || req.body.contact !==  undefined || req.body.contact !== null &&
                req.body.position !==req.body.position !==  undefined || req.body.position !== null &&
                req.body.phone !== '' || req.body.phone !==  undefined || req.body.phone !== null &&
                // validatePhone(req.body.phone) !==  false && 
                // validateEmail(req.body.email) !== false &&
                req.body.email !== '' || req.body.email !== undefined || req.body.email !== null) 
                {
                const {
                  id, warehouseID, warehouseName, itemName, description, category, status, quantity
                } = req.body;
                res.json(req.body)
              
                // WAREHOUSES READS THE DATA WITHIN WAREHOUSES.JSON FILE
                 const warehouses = fs.readFileSync('./data/warehouses.json');
            
                 // WAREHOUSES JSON CONVERTS TO JSON
                 const warehousesJSON = JSON.parse(warehouses);
               
                // PARSE JSON ADDS REQ.BODY
                warehousesJSON.push(req.body)
                // warehousesJSON["warehouses"].push(req.body)
          
                // STRINGJSON CONVERTS WAREHOUSESJSON TO STRING 
                const stringJSON = JSON.stringify(warehousesJSON);
          
                // FS.WRITE WRITES THE NEW JSON FILE
                fs.writeFileSync('./data/warehouses.json',stringJSON, (err) => {
                   if (err) return console.log(err);
                });
          
                warehousesREQ.push(req.body) //push in warehousesREQ to see results LIVE
                res.sendStatus(200)
                next();
           
            } else {
              // This means that one field was not filled correctly
              res.status(404).send({
                error: "This field is required",
              });
            }
            }
          );