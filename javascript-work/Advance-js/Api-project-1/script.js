fetch("https://fakestoreapi.com/products")
.then(resolve => resolve.json() )
.then(data => {
  let apiData = document.getElementById("products");
  for (let i = 0; i < 6; i++) {
    let  result = data[i];
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <p><h2>id:</h2>${result.id}</p>
    <p><h2>Title:</h2> ${result.title}</p>
    <p><h3>price :</h3>${result.price}</p>
    <p><h3>Description :</h3>${result.description}</p>
    <p><h3>category :</h3>${result.category}</p>
    `
  apiData.appendChild(card);

  }
})

