// fetch("https://fakestoreapi.com/products")
// .then(resolve => resolve.json())
// .then(data => {
//   console.log(data);
  
//   let apiData = document.getElementById("product");
//   for (let i = 0; i < 6; i++) {
//     let result = data[i];
//     let card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//     <h2>id:${result.id}</h2>
//     <h2>title:${result.title}</h2>
//     <h1>price :</h1>
//     ${result.price}
//      <h1>description :</h1>
//     ${result.description}
//     <h1>description :</h1>
//     ${result.description}
//     <h1>category :</h1>
//     ${result.category}
//     `
//   apiData.appendChild(card);

//   }
// })


// // by using async await 

// async function apiData ()  {
//   try {
//     let response = await fetch ("https://fakestoreapi.com/products");
//     let data = await response.json();
//     let apiData = document.getElementById("product");
//     for (let i = 0; i < 6; i++) {
//       let result = data[i];
//       let card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//       <h1>"ID :"<p>${result.id}</p></h1>
//       <h3>price: ${result.price}</h3>
//       `
//       apiData.appendChild(card);

//     }
//   } catch (error) {
//     console.log("Error :",error);
//   }
// };

// apiData();






async function apiData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    let productContainer = document.getElementById("product");
    let countDiv = document.getElementById("count");

    let popup = document.getElementById("popup");
    let popupDetails = document.getElementById("popupDetails");
    let closeBtn = document.getElementById("closeBtn");

    // ✅ COUNT SHOW
    countDiv.innerText = `Total Products: ${data.length}`;

    for (let i = 0; i < 6; i++) {
      let result = data[i];

      let card = document.createElement("div");
      card.classList.add("card");

      let button = document.createElement("button");
      button.innerText = "View Details";

      card.innerHTML = `
        <h3>${result.title}</h3>
        <p>Price: $${result.price}</p>
      `;

      card.appendChild(button);

      // ✅ CLICK → POPUP SHOW
      button.addEventListener("click", () => {
        popup.style.display = "block";

        popupDetails.innerHTML = `
          <h2>${result.title}</h2>
          <p>ID: ${result.id}</p>
          <p>Price: $${result.price}</p>
          <p>${result.description}</p>
          <p>Category: ${result.category}</p>
        `;
      });

      productContainer.appendChild(card);
    }

    // ❌ CLOSE POPUP
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

  } catch (error) {
    console.log("Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", apiData);