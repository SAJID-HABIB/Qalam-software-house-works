fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log("consle me", data); // console me
    document.body.innerHTML +=
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  });

// fetch("https://fakestoreapi.com/products")
// .then((res) => res.json )
// .then((data) => {
//   console.log(data);
//   document.body.innerHTML +=
//   "<pre>"+ JSON.stringify(data, null, 2) + "</pre>";
// });
 
// // post api 
// fetch("https://fakestoreapi.com/products", {
//   method : "POST",
//   headers : {
//     "Content-type" : "application/json"
//   },
//   body: JSON.stringify({nam :"sajid", age : 20})
// })
// .then(response => response.json())
// .then((data) => {
//   console.log("data",data);
// })

// Put ApioParam


// fetch("https://fakestoreapi.com/products/1")
// .then(response => response.json())
// .then(data => console.log(data));

fetch("https://fakestoreapi.com/products/1" , {
  method : "PUT",
  headers : {
    "Conyent-type" : "application/json"
  },
  body : JSON.stringify({name : "sajid", class : "bscs"})
})