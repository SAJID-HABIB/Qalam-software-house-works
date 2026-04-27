const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 }
];

const container = document.getElementById("productContainer");
const modal = document.getElementById("modal");

const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");

const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentProductId = null;

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
      <p>$${product.price}</p>
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

// Initial render
renderProducts();