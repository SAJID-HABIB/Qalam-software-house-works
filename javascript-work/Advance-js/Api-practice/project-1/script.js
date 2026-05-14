let products = [];
let filteredProducts = [];
// let filteredProducts = [];

let container = document.getElementById("productContainer");

let updateId = null;



// =====================================
// VALIDATIONS
// =====================================

function isValidName(value){

  return value &&
  /^[A-Za-z\s]{3,30}$/
  .test(value.trim());

}


function isValidCategory(value){

  return value &&
  /^[A-Za-z\s]{3,20}$/
  .test(value.trim());

}


function isValidPrice(value){

  return /^\d+$/.test(value)
  &&
  Number(value) > 0
  &&
  Number(value) <= 100000;

}



// =====================================
// LOAD PRODUCTS
// =====================================
async function loadProducts() {

  try {

    const res = await fetch("/products");

    const data = await res.json();

    console.log("BACKEND DATA:", data);

    // 🔥 ALWAYS trust backend only
    products = Array.isArray(data) ? data : [];

    filteredProducts = [...products];

    render();

  }

  catch (err) {

    console.log(err);

    render("Server Error");

  }

}


// =====================================
// RENDER
// =====================================

// function render(message = ""){

//   container.innerHTML = "";

//   if(message){

//     container.innerHTML =
//     `<div class="msg">${message}</div>`;

//     document.getElementById("count")
//     .innerText = 0;

//     return;
//   }

//   filteredProducts.forEach(p => {

//     container.innerHTML += `

//       <div class="card">

//         <span
//         class="dots"
//         data-id="${p.id}">
//         ⋮
//         </span>

//         <div
//         class="menu"
//         id="menu-${p.id}">

//           <button
//           onclick="openUpdateModal(${p.id})">
//           Update
//           </button>

//         </div>

//         <input
//         type="checkbox"
//         class="itemCheck"
//         data-id="${p.id}">

//         <h3>${p.name}</h3>

//         <p class="price">
//         $${p.price}
//         </p>

//         <p>${p.category}</p>

//       </div>

//     `;

//   });

//   document.getElementById("count")
//   .innerText = filteredProducts.length;

// }


function render(message = "") {

  container.innerHTML = "";

  if(message){
    container.innerHTML = `<div class="msg">${message}</div>`;
    return;
  }

  filteredProducts.forEach(p => {

    container.innerHTML += `
      <div class="card">

        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <p>${p.category}</p>

      </div>
    `;

  });

  document.getElementById("count").innerText = filteredProducts.length;
}


// =====================================
// SEARCH FILTER SORT
// =====================================

function applyAll(){

  let search =
  document.getElementById("search")
  .value
  .trim()
  .toLowerCase();



  let minInput =
  document.getElementById("min")
  .value
  .trim();



  let maxInput =
  document.getElementById("max")
  .value
  .trim();



  // ==========================
  // MIN VALIDATION
  // ==========================

  if(minInput !== ""){

    if(!/^\d+$/.test(minInput)){

      render("Min Price Invalid");

      return;
    }

    if(Number(minInput) < 0){

      render("Min Price Cannot Be Negative");

      return;
    }

  }



  // ==========================
  // MAX VALIDATION
  // ==========================

  if(maxInput !== ""){

    if(!/^\d+$/.test(maxInput)){

      render("Max Price Invalid");

      return;
    }

    if(Number(maxInput) < 0){

      render("Max Price Cannot Be Negative");

      return;
    }

  }



  let min =
  minInput === ""
  ? 0
  : Number(minInput);



  let max =
  maxInput === ""
  ? Infinity
  : Number(maxInput);



  // ==========================
  // RANGE VALIDATION
  // ==========================

  if(min > max){

    render("Min Price Cannot Be Greater Than Max");

    return;
  }



  filteredProducts = products.filter(p =>

    p.name.toLowerCase()
    .includes(search)

    &&

    p.price >= min

    &&

    p.price <= max

  );



  // ==========================
  // SORT
  // ==========================

  let sort =
  document.getElementById("sort")
  .value;



  if(sort === "low"){

    filteredProducts.sort(
      (a,b)=>a.price-b.price
    );

  }



  if(sort === "high"){

    filteredProducts.sort(
      (a,b)=>b.price-a.price
    );

  }



  if(filteredProducts.length === 0){

    render("No Products Found");

    return;
  }



  render();

}



// =====================================
// EVENTS
// =====================================

document.getElementById("search")
.oninput = applyAll;


document.getElementById("filterBtn")
.onclick = applyAll;


document.getElementById("sort")
.onchange = applyAll;




// =====================================
// ADD PRODUCT
// =====================================

document.getElementById("productForm")
.onsubmit = async function(e){

  e.preventDefault();



  let name =
  document.getElementById("name")
  .value
  .trim();



  let price =
  document.getElementById("price")
  .value
  .trim();



  let category =
  document.getElementById("category")
  .value
  .trim();




  // ==========================
  // NAME VALIDATION
  // ==========================

  if(name === ""){

    alert("Name Required");

    return;
  }



  if(!isValidName(name)){

    alert(
      "Name must contain only letters and spaces (3-30 characters)"
    );

    return;
  }




  // ==========================
  // PRICE VALIDATION
  // ==========================

  if(price === ""){

    alert("Price Required");

    return;
  }



  if(!isValidPrice(price)){

    alert(
      "Price must contain only numbers between 1 - 100000"
    );

    return;
  }




  // ==========================
  // CATEGORY VALIDATION
  // ==========================

  if(category === ""){

    alert("Category Required");

    return;
  }



  if(!isValidCategory(category)){

    alert(
      "Category must contain only letters and spaces (3-20 characters)"
    );

    return;
  }




  // ==========================
  // SAVE PRODUCT
  // ==========================

  let newProduct = {

    name,

    price:Number(price),

    category

  };



  try{

    let res = await fetch("/products", {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(newProduct)

    });



    if(!res.ok){

      throw new Error();

    }



    this.reset();

    loadProducts();

    alert("Product Added");

  }

  catch(error){

    alert("Failed To Add Product");

  }

};




// =====================================
// OPEN UPDATE MODAL
// =====================================

function openUpdateModal(id){

  let product =
  products.find(p => p.id === id);



  if(!product){

    alert("Product Not Found");

    return;
  }



  updateId = id;



  document.getElementById("updateName")
  .value = product.name;



  document.getElementById("updatePrice")
  .value = product.price;



  document.getElementById("updateCategory")
  .value = product.category;



  document.getElementById("updateModal")
  .style.display = "flex";

}




// =====================================
// UPDATE PRODUCT
// =====================================

document.getElementById("updateForm")
.onsubmit = async function(e){

  e.preventDefault();



  let name =
  document.getElementById("updateName")
  .value
  .trim();



  let price =
  document.getElementById("updatePrice")
  .value
  .trim();



  let category =
  document.getElementById("updateCategory")
  .value
  .trim();




  // ==========================
  // NAME VALIDATION
  // ==========================

  if(name === ""){

    alert("Name Required");

    return;
  }



  if(!isValidName(name)){

    alert("Invalid Name");

    return;
  }




  // ==========================
  // PRICE VALIDATION
  // ==========================

  if(price === ""){

    alert("Price Required");

    return;
  }



  if(!isValidPrice(price)){

    alert("Invalid Price");

    return;
  }




  // ==========================
  // CATEGORY VALIDATION
  // ==========================

  if(category === ""){

    alert("Category Required");

    return;
  }



  if(!isValidCategory(category)){

    alert("Invalid Category");

    return;
  }




  let updatedData = {

    name,

    price:Number(price),

    category

  };



  try{

    let res = await fetch(
      `/products/${updateId}`,
      {

        method:"PUT",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify(updatedData)

      }
    );



    if(!res.ok){

      throw new Error();

    }



    document.getElementById("updateModal")
    .style.display = "none";



    loadProducts();

    alert("Product Updated");

  }

  catch(error){

    alert("Update Failed");

  }

};




// =====================================
// DELETE PRODUCTS
// =====================================

document.getElementById("deleteBtn")
.onclick = async function(){

  let checked =
  document.querySelectorAll(
    ".itemCheck:checked"
  );



  if(checked.length === 0){

    alert("Select At Least One Product");

    return;
  }



  let confirmDelete =
  confirm(
    "Are You Sure To Delete?"
  );



  if(!confirmDelete){

    return;
  }



  let ids =
  [...checked].map(cb =>
    Number(cb.dataset.id)
  );



  try{

    let res = await fetch("/products", {

      method:"DELETE",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({ ids })

    });



    if(!res.ok){

      throw new Error();

    }



    loadProducts();

    alert("Products Deleted");

  }

  catch(error){

    alert("Delete Failed");

  }

};




// =====================================
// SELECT ALL
// =====================================

document.getElementById("selectAll")
.addEventListener("change", function(){

  document
  .querySelectorAll(".itemCheck")
  .forEach(cb => {

    cb.checked = this.checked;

  });

});




// =====================================
// SYNC SELECT ALL
// =====================================

function syncSelectAll(){

  let all =
  document.querySelectorAll(".itemCheck");



  let checked =
  document.querySelectorAll(
    ".itemCheck:checked"
  );



  document.getElementById("selectAll")
  .checked =

  all.length > 0
  &&
  all.length === checked.length;

}




// =====================================
// CHECKBOX EVENT
// =====================================

document.addEventListener(
  "change",
  function(e){

    if(
      e.target.classList.contains(
        "itemCheck"
      )
    ){

      syncSelectAll();

    }

  }
);




// =====================================
// MENU
// =====================================

document.addEventListener(
  "click",
  function(e){

    document
    .querySelectorAll(".menu")
    .forEach(m => {

      m.style.display = "none";

    });



    if(
      e.target.classList.contains(
        "dots"
      )
    ){

      let id =
      e.target.dataset.id;



      let menu =
      document.getElementById(
        "menu-" + id
      );



      if(menu){

        menu.style.display = "block";

      }

    }

  }
);




// =====================================
// CLOSE MODAL
// =====================================

window.onclick = function(e){

  let modal =
  document.getElementById(
    "updateModal"
  );



  if(e.target === modal){

    modal.style.display = "none";

  }

};




// =====================================
// START
// =====================================

loadProducts();