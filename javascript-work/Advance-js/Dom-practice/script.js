let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 }
]

let container = document.getElementById("container");
let model = document.getElementById("model");

let nameInput = document.getElementById("nameInput");
let priceInput = document.getElementById("priceInput");
let descrption = document.getElementById("descrption");

let updateBtn = document.getElementById("update");
let cancelBtn = document.getElementById("cancel");

function renderProducts() {
  container.innerHTML = "";
  products.forEach(data => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <button class="menu-btn">...</button>
    <div class="drop-down">
    <button class="edit-btn">Update</button>
    </div>
    <p>${data.name}</p>
    <p>${data.price}</p>
    <p>${data.descrption}</p>    
    `
  });
  let menuBtn = document.querySelector(".menu-btn");
  let dopDown = document.querySelector(".drop-down");
  let editBtn = document.querySelector(".edit-btn");

  menuBtn.addEventListener("click",() => {
    document.querySelectorAll(".drop-down").forEach(d => d.style.display = "none");
      drop-down.style.display = "block";
  
  });
}

console.log(renderProducts());