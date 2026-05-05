let products = [
  {id:1,name:"Laptop",price:50000,category:"Electronics"},
  {id:2,name:"Phone",price:30000,category:"Electronics"},
  {id:3,name:"Shoes",price:5000,category:"Fashion"},
  {id:4,name:"Watch",price:7000,category:"Accessories"},
  {id:5,name:"Headphones",price:4000,category:"Electronics"},
  {id:6,name:"Backpack",price:2500,category:"Fashion"},
  {id:7,name:"Keyboard",price:1500,category:"Electronics"},
  {id:8,name:"Mouse",price:1200,category:"Electronics"},
  {id:9,name:"Chair",price:8000,category:"Furniture"},
  {id:10,name:"Table",price:12000,category:"Furniture"},
  {id:11,name:"T-shirt",price:1500,category:"Fashion"},
  {id:12,name:"Jeans",price:3500,category:"Fashion"},
  {id:13,name:"Jacket",price:6000,category:"Fashion"},
  {id:14,name:"Sunglasses",price:2000,category:"Accessories"},
  {id:15,name:"Camera",price:45000,category:"Electronics"},
  {id:16,name:"Printer",price:9000,category:"Electronics"},
  {id:17,name:"Notebook",price:200,category:"Stationery"},
  {id:18,name:"Pen",price:50,category:"Stationery"},
  {id:19,name:"Water Bottle",price:800,category:"Home"},
  {id:20,name:"Microwave",price:15000,category:"Home Appliances"},
  {id:21,name:"Refrigerator",price:60000,category:"Home Appliances"},
  {id:22,name:"Fan",price:3000,category:"Home Appliances"},
  {id:23,name:"Air Conditioner",price:55000,category:"Home Appliances"},
  {id:24,name:"Tablet",price:25000,category:"Electronics"},
  {id:25,name:"Smart TV",price:70000,category:"Electronics"},
  {id:26,name:"Gaming Console",price:45000,category:"Electronics"},
  {id:27,name:"Speaker",price:5000,category:"Electronics"},
  {id:28,name:"Bed",price:30000,category:"Furniture"},
  {id:29,name:"Pillow",price:1000,category:"Home"},
  {id:30,name:"Blanket",price:2500,category:"Home"},
  {id:31,name:"Shoelaces",price:200,category:"Fashion"},
  {id:32,name:"Cap",price:800,category:"Fashion"},
  {id:33,name:"Gloves",price:1200,category:"Fashion"},
  {id:34,name:"Router",price:3500,category:"Electronics"},
  {id:35,name:"Power Bank",price:2200,category:"Electronics"}
];

function isValidName(value){
  return value &&
    /^[A-Za-z\s]{3,30}$/.test(value.trim());
}

function isValidCategory(value){
  return value &&
    /^[A-Za-z\s]{3,20}$/.test(value.trim());
}

function isValidPrice(value){
  return /^\d+$/.test(value) &&
    Number(value) > 0 &&
    Number(value) <= 100000;
}

let filteredProducts = [...products];
let container = document.getElementById("productContainer");

// 🔙 STORE LAST STATE
let lastState = [];

// 🔁 RENDER
function render(message="") {
 
  container.innerHTML = "";

  if (message) {
    container.innerHTML = `<div class="msg">${message}</div>`;
    return;
  }

  filteredProducts.forEach(p=>{
    container.innerHTML += `
    <div class="card">

      <span class="dots" data-id="${p.id}">⋮</span>

      <div class="menu" id="menu-${p.id}">
        <button onclick="updateProduct(${p.id})">Update</button>
      </div>

      <input type="checkbox" class="itemCheck" data-id="${p.id}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <p>${p.category}</p>

    </div>`;
  });

  document.getElementById("count").innerText = filteredProducts.length;
  syncSelectAll();
}

// 🔄 APPLY ALL
function applyAll() {
  let search = document.getElementById("search").value.toLowerCase();
  let minInput = document.getElementById("min").value;
  let maxInput = document.getElementById("max").value;

  let min = Number(minInput);
  let max = Number(maxInput);

  if ((minInput && min < 0) || (maxInput && max < 0)) {
    render("Price cannot be negative");
    return;
  }

  min = minInput ? min : 0;
  max = maxInput ? max : Infinity;

  filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    p.price >= min &&
    p.price <= max
  );

  if (filteredProducts.length === 0 && (minInput || maxInput)) {
    render("No products available in this price range");
    return;
  }

  let sort = document.getElementById("sort").value;

  if (sort === "low") filteredProducts.sort((a,b)=>a.price-b.price);
  if (sort === "high") filteredProducts.sort((a,b)=>b.price-a.price);

  render();
}

// 🔍 EVENTS
document.getElementById("search").oninput = applyAll;
document.getElementById("filterBtn").onclick = applyAll;
document.getElementById("sort").onchange = applyAll;

// ✅ SELECT ALL
document.getElementById("selectAll").addEventListener("change",function(){
  document.querySelectorAll(".itemCheck").forEach(cb=>{
    cb.checked = this.checked;
  });
});

// 🔄 SYNC
function syncSelectAll() {
  let all = document.querySelectorAll(".itemCheck");
  let checked = document.querySelectorAll(".itemCheck:checked");

  document.getElementById("selectAll").checked =
    all.length > 0 && all.length === checked.length;
}

// ❌ DELETE
document.getElementById("deleteBtn").onclick = function() {
  let checked = document.querySelectorAll(".itemCheck:checked");

  if (checked.length === 0) {
    alert("Select at least one product");
    return;
  }

  if (!confirm("Are you sure to delete selected?")) return;

  // 🔙 SAVE STATE BEFORE DELETE
  lastState = [...products];

  let ids = [...checked].map(cb=>Number(cb.dataset.id));
  products = products.filter(p=>!ids.includes(p.id));

  applyAll();
};

// 🔙 UNDO
document.getElementById("undoBtn").onclick = function() {
  if (lastState.length === 0) {
    alert("There are no changes to back.");
    return;
  }

  products = [...lastState];
  lastState = [];
  applyAll();
};

// ➕ ADD PRODUCT (FIXED)
document.getElementById("addBtn").onclick = function () {

 let name = prompt("Product Name:");

if (!name) return;
name = name.trim();

// ❌ only letters + space allowed
let nameRegex = /^[A-Za-z\s]+$/;

if (!nameRegex.test(name)) {
  alert("Name must contain only letters (no numbers allowed)");
  return;
}

  let priceInput = prompt("Price:");

if (!priceInput) return;

// ❌ strict number check
if (!/^\d+$/.test(priceInput)) {
  alert("Price must contain only numbers");
  return;
}

let price = Number(priceInput);

if (price <= 0) {
  alert("Price must be greater than 0");
  return;
}
  let category = prompt("Category:");

if (!category) return;

category = category.trim();

// ❌ empty check
if (category === "") {
  alert("Category is required");
  return;
}

// ❌ only letters allowed (no numbers, no symbols)
let categoryRegex = /^[A-Za-z\s]+$/;

if (!categoryRegex.test(category)) {
  alert("Category must contain only letters (no numbers or symbols allowed)");
  return;
}

// ❌ length check (optional but strict)
if (category.length < 3) {
  alert("Category must be at least 3 characters");
  return;
}

if (category.length > 20) {
  alert("Category is too long (max 20 characters)");
  return;
}

  products.unshift({
    id: Date.now(),
    name,
    price,
    category
  });

  document.getElementById("search").value = "";
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.getElementById("sort").value = "";

  applyAll();
};
// checkbox sync
document.addEventListener("change", function(e){
  if (e.target.classList.contains("itemCheck")) {
    syncSelectAll();
  }
});

function updateProduct(id){

  let product = products.find(p => p.id === id);

  let name = prompt("Update Name:", product.name);
  if(!name) return;
  name = name.trim();

  if(!/^[A-Za-z\s]{3,30}$/.test(name)){
    alert("Invalid Name");
    return;
  }

  let priceInput = prompt("Update Price:", product.price);
  if(!/^\d+$/.test(priceInput)){
    alert("Invalid Price");
    return;
  }

  let price = Number(priceInput);

  let category = prompt("Update Category:", product.category);
  if(!category) return;
  category = category.trim();

  if(!/^[A-Za-z\s]{3,20}$/.test(category)){
    alert("Invalid Category");
    return;
  }

  product.name = name;
  product.price = price;
  product.category = category;

  applyAll();
}

document.addEventListener("click", function(e){

  // 🔹 sab menus close karo
  document.querySelectorAll(".menu").forEach(m=>{
    m.style.display = "none";
  });

  // 🔹 agar dots click hua
  if(e.target.classList.contains("dots")){
    let id = e.target.dataset.id;

    let menu = document.getElementById("menu-" + id);

    if(menu){
      menu.style.display = "block";
    }
  }

});

// 🚀 START
applyAll();