fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    console.log(data); // console me
    document.body.innerHTML += "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  });