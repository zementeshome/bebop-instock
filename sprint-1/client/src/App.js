import React from "react";
import "./App.css";
// import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import WarehouseList from './components/WarehouseList/WarehouseList';
// import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
// import InventoryList from "./Components/InventoryList/InventoryList";
// import Header from "./Components/Header/Header";
import WarehouseList from "./Components/WarehouseList/WarehouseList";
// import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
// import AddNewWarehouse from "./Components/AddNewWarehouse/AddWarehouse";
// import InventoryItemDetails from "./Components/InventoryItemDetails/InventoryItemDetails";
// import Background from "./Components/Background/Background";
// import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";
import HeaderInventory from './Components/HeaderInventory/HeaderInventory';

class App extends React.Component {
  state = {
    warehouses: {
      warehouseInfo: [
        {
          id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
          name: "Manhattan",
          address: "503 Broadway",
          city: "New York",
          country: "USA",
          contact: {
            name: "Parmin Aujla",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "paujla@instock.com",
          },
        },
        {
          id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
          name: "King West",
          address: "469 King Street West",
          city: "Toronto",
          country: "CAN",
          contact: {
            name: "Greame Lyon",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "glyon@instock.com",
          },
        },
        {
          id: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
          name: "Granville",
          address: "55 Granville Street",
          city: "Vancouver",
          country: "CAN",
          contact: {
            name: "Brad MacDonald",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "bmcdonald@instock.com",
          },
        },
        {
          id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4"',
          name: "San Fran",
          address: "890 Brannnan Street",
          city: "San Francisco",
          country: "USA",
          contact: {
            name: "Gary Wong",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: 'gwong@instock.com"',
          },
        },
        {
          id: "89898957-04ba-4bd0-9f5c-a7aea7447963",
          name: "Santa Monica",
          address: "520 Broadway",
          city: "Santa Monica",
          country: "USA",
          contact: {
            name: "Sharon Ng",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "sng@instock.com",
          },
        },
        {
          id: "ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7",
          name: "Seattle",
          address: "1201 Third Avenue",
          city: "Seattle",
          country: "USA",
          contact: {
            name: "Daniel Bachu",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "dbachu@instock.com",
          },
        },
        {
          id: "bb1491eb-30e6-4728-a5fa-72f89feaf622",
          name: "Montreal",
          address: "1125 Stanley Street",
          city: "Montreal",
          country: "CAN",
          contact: {
            name: "Alana Thomas",
            position: "Warehouse Manager",
            phone: "+1 (646) 123-1234",
            email: "athomas@instock.com",
          },
        },
      ],
    },
    inventory: [
      {
        id: "7c79d334-6b90-4052-9def-aa9b8519c9fb",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Monitor",
        description:
          'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
        category: "Electronics",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "eafcb711-a726-4b3c-adec-704e3265c47d",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Backpack",
        description:
          "This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.",
        category: "Gear",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "72c826ba-fde0-4aae-9aaf-95c6072946cd",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "T-Shirt",
        description:
          "Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe",
        category: "Apparel",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "019da03d-1162-48a4-ad48-ed655e3d7301",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Belt",
        description:
          "Made from 100% full grain leather this belt will go with any dress or casual outfit.",
        category: "Accessories",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "705b808f-d8a0-4713-a796-8653c5c5952b",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Toothpaste",
        description:
          "This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.",
        category: "Health",
        status: "In Stock",
        quantity: 4000,
      },
      {
        id: "f19b0b8a-9cca-4567-9af7-4016a15e038a",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Mouse",
        description:
          "With a 1-month battery life this mouse is perfect for travel and productivity.",
        category: "Electronics",
        status: "In Stock",
        quantity: 785,
      },
      {
        id: "2cba0296-c77d-4758-9115-bd98ac18f2c0",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Sleeping Bag",
        description:
          "This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.",
        category: "Gear",
        status: "In Stock",
        quantity: 987,
      },
      {
        id: "e202e167-d242-4d7f-b8fc-68caffef9e01",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Windbreaker",
        description:
          "Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.",
        category: "Apparel",
        status: "In Stock",
        quantity: 1185,
      },
      {
        id: "079c88df-ed32-4d88-a9b7-eaebc85c4ce2",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Water Bottle",
        description:
          "With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.",
        category: "Accessories",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "56c8e94c-777d-4176-b7fd-02f0806f614a",
        warehouseID: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        warehouseName: "King West",
        itemName: "Protein Powder",
        description:
          "100% natural plant-based protein powder from organic ingredients.",
        category: "Health",
        status: "Out of Stock",
        quantity: 0,
      },
    ],
    manhattan: [
      {
        id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Television",
        description:
          'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
        category: "Electronics",
        status: "In Stock",
        quantity: 500,
      },
      {
        id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Gym Bag",
        description:
          "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        category: "Gear",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "a193a6a7-42ab-4182-97dc-555ee85e7486",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Hoodie",
        description:
          "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
        category: "Apparel",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "8f16bd30-bab5-40af-aca2-b63d5fdd1acc",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Keychain",
        description:
          "Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.",
        category: "Accessories",
        status: "In Stock",
        quantity: 2000,
      },
      {
        id: "bdc6bb69-e09c-498d-8abd-be2792504d00",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Shampoo",
        description: "Natural shampoo made from 99% biodegradable ingredients.",
        category: "Health",
        status: "In Stock",
        quantity: 4350,
      },
      {
        id: "3ce124a4-78b0-4d80-91b9-11f9ced631a7",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Phone Charger",
        description:
          "This USB-C phone charger features fast charging for the latest devices.",
        category: "Electronics",
        status: "In Stock",
        quantity: 10000,
      },
      {
        id: "4dd464d6-90b8-4330-91e0-bd1217811bd9",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Tent",
        description:
          "Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.",
        category: "Gear",
        status: "In Stock",
        quantity: 800,
      },
      {
        id: "c0ba64a8-0ecb-4a7d-ab7f-2dbbd1d437b1",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Winter Jacket",
        description:
          "Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. breathable layers without a ton of vents and perforations.",
        category: "Apparel",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "d9ef9352-2367-4272-8884-70cf80cb7a38",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Watch",
        description:
          "Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.",
        category: "Accessories",
        status: "Out of Stock",
        quantity: 0,
      },
      {
        id: "b70067d1-49c9-4925-b830-67b3e98005d5",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Soap",
        description:
          "Organic and hypoallergenic, this soap is safe to use for all skin types.",
        category: "Health",
        status: "In Stock",
        quantity: 12500,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <HeaderInventory />
        {/* <WarehouseList /> */}
      {/* <EditWarehouse /> */}
      {/* <WarehouseList /> */}
      {/* <AddNewWarehouse /> */}
      {/* <InventoryItemDetails /> */}
      {/* <EditInventoryItem /> */}
        <WarehouseList warehouses={this.state.warehouses.warehouseInfo}/>
        {/* <WarehouseDetails warehouses={this.state.warehouses.warehouseInfo} inventory={this.state.inventory}/> */}
        {/* <InventoryList manhattan={this.state.manhattan} /> */}
        {/* <Background /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <route />} />
            <Route path="/" exact component={() => <route />} />
            {/* <Route path="/warehousedetails" component={WarehouseDetails}></Route> */}
            <Route path="/" exact component={() => <route />} />
            <Route path="/" exact component={() => <route />} />
            <Route path="/" exact component={() => <route />} />
            <Route path="/" exact component={() => <route />} />
            <Route path="/" exact component={() => <route />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
  export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* <WarehouseList /> */}
//       {/* <EditWarehouse /> */}
//       {/* <WarehouseList /> */}
//       {/* <AddNewWarehouse /> */}
//       {/* <InventoryItemDetails /> */}
//       <EditInventoryItem />
//       {/* <Background /> */}
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//           <Route path="/" exact component={() => <route />} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
