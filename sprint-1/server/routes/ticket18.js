router.put('/:id', cors(), (req, res) => {
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

    let id = req.params.id;

    let jsonData = fs.readFileSync('warehouses.json')
    let data = JSON.parse(jsonData)


    data[id]['itemName'] = req.body.itemName;  
    data[id]['warehouseName'] = req.body.warehouseName;
    data[id]['description'] = req.body.description;
    data[id]['category'] = req.body.category;
    data[id]['status'] = req.body.status;
    data[id]['quantity'] = req.body.quantity;

    fs.writeFileSync('warehouses.json', (JSON.stringify(data)));
    res.json(data);
  
    res.status(200).json(req.body)
    // console.log(req.body)
    // console.log(req.params);
    // res.send('success');
  });


function findById

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