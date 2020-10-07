const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const jwt = require('jsonwebtoken');

const warehouses = require('./data/warehouses.json');
const inventories = require('./data/inventories.json');

//ticket 22
app.get('/warehouses', (_req, res) => {
    res.send(warehouses);
});

//ticket 21 && 9
app.get(`/warehouses/:id`, (req, res) => {
    const warehouse = warehouses.find(object => object.id === req.params.id)
    const inventory = inventories.find(object => object.id === req.params.id)
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
    },}
    let getInventory = {
            id: inventory.id,
            warehouseID: inventory.warehouseID,
            warehouseName: inventory.warehouseName,
            itemName: inventory.itemName,
            description: inventory.description,
            category: inventory.category,
            status: inventory.status,
            quantity: inventory.quantity}

    res.send({
      getWarehouse,
      getInventory
    });
})


//ticket 20
app.post('/warehouses', (req, res) => {
    
})

//ticket 11
app.get('/inventories', (_req, res) => {
    res.send(inventories);
});

//ticket 10
app.get('/inventories', (_req, res) => {
    const inventory = inventories.find(object => object.id === req.params.id)
    let getInventoryItem = {id: inventory.id,
        warehouseID: inventory.warehouseID,
        warehouseName: inventory.warehouseName,
        itemName: inventory.itemName,
        description: inventory.description,
        category: inventory.category,
        status: inventory.status,
        quantity: inventory.quantity}
    res.send(getInventoryItem);
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
});