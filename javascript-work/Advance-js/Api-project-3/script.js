async function apiDta() {
  
  try {
    let respones = await fetch("https://fakestoreapi.com/products");
  let data = await respones.json();
  console.log(data);
  
    let product = document.getElementById("product");
    let cardCount = document.getElementById("count");
    let popup = document.getElementById("popup");
    let popupContent = document.getElementById("popupDetails");
    let closeBtn = document.getElementById("closeBtn");
    cardCount.innerHTML = `total product card : ${data.length}`

    for (let i = 0; i < data.length; i++) {
      const result = data[i];

      let card = document.createElement("div");
      card.classList.add("add");

      let button = document.createElement("button");
      button.innerText = "view Detail";
      card.innerHTML = `
      <h3>${result.id}</h3>
      <p>price : ${result.price}</p>
      `;
      card.appendChild(button);

      button.addEventListener("click",() => {
        popup.style.display = "block";
        popupContent.innerHTML = `
        <h3>${result.id}</h3>
        <p>Price : ${result.price}</p>
        <P>Description :${result.description}</P>
        `
      })
      product.appendChild(card);
    }
    closeBtn.addEventListener("click",() => {
      popup.style.display = "none";
    })
  } catch (error) {
    
  }
}
document.addEventListener("DOMContentLoaded",apiDta)
// apiDta()

// console.log(apiDta());
