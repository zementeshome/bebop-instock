const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const warehouses = require('./warehouses.json');
const inventories = require('./inventories.json');

app.get('/warehouses', (_req, res) => {
    res.send(warehouses);
});

app.get(`/warehouses/:id`, (req, res) => {
    const warehouse = warehouses.find(object => object.id === req.params.id)
    const inventory = inventories.find(object => object.id === req.params.id)
    res.send({
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
      },
      id: inventory.id,
      warehouseID: inventory.warehouseID,
      warehouseName: inventory.warehouseName,
      itemName: inventory.itemName,
      description: inventory.description,
      category: inventory.category,
      status: inventory.status,
      quantity: inventory.quantity
    });
})

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
});