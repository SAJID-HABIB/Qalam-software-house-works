const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());


// ======================================
// STATIC FILES
// ======================================

app.use(express.static(__dirname));



// ======================================
// PRODUCTS FILE PATH
// ======================================

const FILE = path.join(
  __dirname,
  "products.json"
);



// ======================================
// GET PRODUCTS FROM FILE
// ======================================

function getProducts(){

  try{

    const data =
    fs.readFileSync(FILE, "utf8");



    // ✅ empty file check
    if(!data){

      return [];

    }



    const products =
    JSON.parse(data);



    // ✅ array check
    return Array.isArray(products)
    ? products
    : [];

  }

  catch(error){

    console.log(error);

    return [];

  }

}



// ======================================
// SAVE PRODUCTS
// ======================================

function saveProducts(products){

  fs.writeFileSync(

    FILE,

    JSON.stringify(products, null, 2)

  );

}



// ======================================
// GET API
// ======================================

app.get("/products", (req, res) => {

  const products = getProducts();

  res.json(products);

});



// ======================================
// ADD PRODUCT
// ======================================

app.post("/products", (req, res) => {

  const products = getProducts();



  const newProduct = {

    id: Date.now(),

    name: req.body.name,

    price: req.body.price,

    category: req.body.category

  };



  // ✅ old + new products
  products.unshift(newProduct);



  saveProducts(products);



  res.json({
    message:"Product Added",
    product:newProduct
  });

});



// ======================================
// UPDATE PRODUCT
// ======================================

app.put("/products/:id", (req, res) => {

  const products = getProducts();

  const id = Number(req.params.id);



  const product =
  products.find(p => p.id === id);



  if(!product){

    return res.status(404).json({
      message:"Product Not Found"
    });

  }



  product.name =
  req.body.name;

  product.price =
  req.body.price;

  product.category =
  req.body.category;



  saveProducts(products);



  res.json({
    message:"Product Updated",
    product
  });

});



// ======================================
// DELETE PRODUCTS
// ======================================

app.delete("/products", (req, res) => {

  let products = getProducts();

  const ids = req.body.ids;



  products = products.filter(

    p => !ids.includes(p.id)

  );



  saveProducts(products);



  res.json({
    message:"Products Deleted"
  });

});



// ======================================
// SERVER
// ======================================

app.listen(3001, () => {

  console.log(
    "Server Running http://localhost:3001"
  );

});