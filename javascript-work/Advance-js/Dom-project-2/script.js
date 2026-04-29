<<<<<<< HEAD
let products = [
  { 
    id: 1, 
    name: "Laptop", 
    price: 1000,
    description: "A portable computer used for work, study, and entertainment."
  },
  { 
    id: 2, 
    name: "Phone", 
    price: 500,
    description: "A smartphone used for communication, apps, and everyday tasks."
  },
  { 
    id: 3, 
    name: "Headphones", 
    price: 200,
    description: "An audio device used for listening to music and calls privately."
  }
];

// let count = document.getElementById("count");
const container = document.getElementById("productContainer");
let newBtn = document.getElementById("newBtn");
const modal = document.getElementById("modal");


const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const description = document.getElementById("Description");
=======
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 }
];

const container = document.getElementById("productContainer");
const modal = document.getElementById("modal");

const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729

const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentProductId = null;

<<<<<<< HEAD
function count () {
  document.getElementById("count").textContent = products.length;
}

count();

=======
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729
// Render Products
function renderProducts() {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <button class="menu-btn">⋮</button>
      <div class="dropdown">
        <button class="edit-btn">Update</button>
      </div>
      <h3>${product.name}</h3>
<<<<<<< HEAD
      <p>${product.price}</p>
      <P>${product.description}</P>
=======
      <p>$${product.price}</p>
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729
    `;

    const menuBtn = card.querySelector(".menu-btn");
    const dropdown = card.querySelector(".dropdown");
    const editBtn = card.querySelector(".edit-btn");

    // Toggle dropdown
    menuBtn.addEventListener("click", () => {
      document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
      dropdown.style.display = "block";
    });

    // Open modal
    editBtn.addEventListener("click", () => {
      currentProductId = product.id;

      nameInput.value = product.name;
      priceInput.value = product.price;
<<<<<<< HEAD
      description.value = product.description;
=======
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729

      modal.style.display = "block";
      dropdown.style.display = "none";
    });

    container.appendChild(card);
  });
}

// Update product
updateBtn.addEventListener("click", () => {
  const product = products.find(p => p.id === currentProductId);

  product.name = nameInput.value;
  product.price = priceInput.value;
<<<<<<< HEAD
  product.description = description.value;
=======
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729

  renderProducts();
  modal.style.display = "none";
});

// Cancel
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close dropdown on outside click
window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("menu-btn")) {
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
  }
});

<<<<<<< HEAD
newBtn.addEventListener("click",() => {
  document.getElementById("nameInput").value;
  document.getElementById("Description").value;

  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  ${priceInput} ${description}
  `
  newCard.appendChild(card);
})

=======
>>>>>>> 72629c7b5990ca321c3ea235d744e4da1a6af729
// Initial render
renderProducts();