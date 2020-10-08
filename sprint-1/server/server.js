const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs"); //commonjs format
//Routes to Warehouses and Inventories
const warehousesRoute = require("./routes/warehousesRoute");
const inventoriesRoute = require("./routes/inventoriesRoute");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 // # Warehouses verbs: GET, PUT, POST, DELETE
 app.use("/warehouses", warehousesRoute);

 // # Invetories verbs: GET, PUT, POST, DELETE
 app.use("/inventories", inventoriesRoute);

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});