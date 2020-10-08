const express = require("express");
const app = express();
let inventoriesREQ = require("./data/inventories.json");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/inventories", (req, res) => {
    if (req.body.name !== '' || req.body.name !== undefined || req.body.name !== null &&
        req.body.description !== '' || req.body.description !== undefined || req.body.description !== null &&
        req.body.category !== '' || req.body.category !== undefined || req.body.category !== null &&
        req.body.quantity !== '' || req.body.quantity !== undefined || req.body.quantity !== null &&
        req.body.warehouse !== '' || req.body.warehouse !== undefined || req.body.warehouse !== null)
        {inventoriesREQ.push(req.body)}
        else {
            res.status(404).send({
              error: "This field is required",
            });}
        });

    // Hector please merge with inventoriesRoute.js