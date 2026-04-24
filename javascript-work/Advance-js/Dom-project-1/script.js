let products = [
  { id: 1, title: "Laptop", price: 75000, description: "High performance laptop for work and gaming" },
  { id: 2, title: "Smartphone", price: 45000, description: "Latest Android smartphone with great camera" },
  { id: 3, title: "Headphones", price: 5000, description: "Noise cancelling wireless headphones" },
  { id: 4, title: "Smart Watch", price: 12000, description: "Fitness tracking smartwatch with heart monitor" },
  { id: 5, title: "Keyboard", price: 2500, description: "Mechanical keyboard with RGB lights" },
  { id: 6, title: "Mouse", price: 1500, description: "Wireless ergonomic mouse" },
  { id: 7, title: "Monitor", price: 30000, description: "27 inch full HD LED monitor" },
  { id: 8, title: "Printer", price: 18000, description: "All-in-one wireless printer" },
  { id: 9, title: "Tablet", price: 28000, description: "Portable tablet for entertainment and study" },
  { id: 10, title: "Speaker", price: 7000, description: "Bluetooth speaker with deep bass" },
  { id: 11, title: "Power Bank", price: 3000, description: "10000mAh fast charging power bank" },
  { id: 12, title: "Camera", price: 85000, description: "DSLR camera for professional photography" },
  { id: 13, title: "Tripod", price: 2000, description: "Stable tripod stand for camera" },
  { id: 14, title: "Charger", price: 1200, description: "Fast charging USB adapter" },
  { id: 15, title: "USB Cable", price: 500, description: "Durable Type-C charging cable" },
  { id: 16, title: "Router", price: 6000, description: "High speed WiFi router" },
  { id: 17, title: "Hard Drive", price: 10000, description: "1TB external hard disk" },
  { id: 18, title: "SSD", price: 12000, description: "Fast SSD storage 512GB" },
  { id: 19, title: "Microphone", price: 4000, description: "Studio quality microphone" },
  { id: 20, title: "Gaming Chair", price: 25000, description: "Comfortable chair for long gaming sessions" },
  { id: 21, title: "Desk Lamp", price: 2000, description: "LED desk lamp with adjustable brightness" },
  { id: 22, title: "Backpack", price: 3500, description: "Waterproof laptop backpack" },
  { id: 23, title: "Shoes", price: 5000, description: "Comfortable running shoes" },
  { id: 24, title: "Watch", price: 8000, description: "Stylish wrist watch" },
  { id: 25, title: "Sunglasses", price: 2500, description: "UV protection sunglasses" },
  { id: 26, title: "T-Shirt", price: 1500, description: "Cotton casual t-shirt" },
  { id: 27, title: "Jeans", price: 4000, description: "Slim fit denim jeans" },
  { id: 28, title: "Jacket", price: 7000, description: "Warm winter jacket" },
  { id: 29, title: "Cap", price: 1000, description: "Stylish sports cap" },
  { id: 30, title: "Wallet", price: 2000, description: "Leather wallet for daily use" },
  { id: 31, title: "Perfume", price: 6000, description: "Long lasting fragrance" },
  { id: 32, title: "Book", price: 1200, description: "Motivational self-help book" },
  { id: 33, title: "Notebook", price: 500, description: "Spiral notebook for writing" },
  { id: 34, title: "Pen Set", price: 800, description: "Smooth writing pen set" },
  { id: 35, title: "Water Bottle", price: 900, description: "Reusable stainless steel bottle" }
];

function oppenNew() {
  document.getElementById("model").style.display = "flex";

  document.getElementById("pTitle").value = "";
  document.getElementById("pPrice").value = "";
}

function render() {
  let grid = document.getElementById("grid");
  grid.innerHTML = "";
  products.forEach(p => {
    grid.innerHTML += `
    <div class="card">
    <h3>${p.title}</h3>
    <h2>${p.price}</h2>
    <p>${p.description}</p>
    </div>
    `
    
  });

}

document.getElementById("count").innerHTML = products.length;

function closeModel() {
  document.getElementById("model").style.display = "none";
}

function saveProducts() {
  let title = document.getElementById("pTitle").value.trim();
  let price = document.getElementById("pPrice").value.trim();
  let desc = document.getElementById("pDesc").value.trim();

  if (title === "" || price == "" || desc === "") {
    alert("all filed are required");
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert("Plaese Enetr the correct value ");
    return;
  }
products.unshift({
id : Date.now(),
title,
price : Number(price),
description : desc
})
closeModel();
render();
}

// saveProducts();


render();



document.getElementById("newBtn").addEventListener("click",oppenNew);
document.getElementById("cancelBtn").addEventListener("click",closeModel);
document.getElementById("saveBtn").addEventListener("click",saveProducts);