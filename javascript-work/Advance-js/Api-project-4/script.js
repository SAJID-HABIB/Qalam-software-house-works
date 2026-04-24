let products = [
  { id: 1, title: "Laptop", price: 75000, description: "High performance laptop for work and gaming" },
  { id: 2, title: "Smartphone", price: 45000, description: "Latest Android smartphone with great camera" }
  // baaki same rehne do
];

function render(){
  let grid = document.getElementById("grid");
  grid.innerHTML = "";

  products.forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.price}</p>
        <p>${p.description}</p>
      </div>
    `;
  });

  document.getElementById("count").innerText = products.length;
}

function openNew(){
  document.getElementById("modal").style.display="flex";
  document.getElementById("pTitle").value="";
  document.getElementById("pPrice").value="";
  document.getElementById("pDesc").value="";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function saveProduct(){
  let title = document.getElementById("pTitle").value.trim();
  let price = document.getElementById("pPrice").value.trim();
  let desc = document.getElementById("pDesc").value.trim();

  if(title === "" || price === "" || desc === ""){
    alert("Please fill all fields!");
    return;
  }

  if(isNaN(price) || price <= 0){
    alert("Enter valid price!");
    return;
  }

  products.unshift({
    id: Date.now(),
    title,
    price: Number(price),
    description: desc
  });

  closeModal();
  render();
}

// ✅ yahan shift kiya function calling
document.getElementById("newBtn").addEventListener("click", openNew);
document.getElementById("cancelBtn").addEventListener("click", closeModal);
document.getElementById("saveBtn").addEventListener("click", saveProduct);

render();