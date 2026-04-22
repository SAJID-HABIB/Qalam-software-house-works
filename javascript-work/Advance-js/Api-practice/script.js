fetch("https://fakestoreapi.com/products")
.then(resolve => resolve.json())
.then(data => {
  console.log(data);
  
  let apiData = document.getElementById("product");
  for (let i = 0; i < 6; i++) {
    let result = data[i];
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h2>id:${result.id}</h2>
    <h2>title:${result.title}</h2>
    <h1>price :</h1>
    ${result.price}
     <h1>description :</h1>
    ${result.description}
    <h1>description :</h1>
    ${result.description}
    <h1>category :</h1>
    ${result.category}
    `
  apiData.appendChild(card);

  }
})