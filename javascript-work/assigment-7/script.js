let color = ["red", "blue", "green"];

function addColorStart() {
  let newColor = prompt("ENter the color to add the beggning");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.unshift(newColor);
      resolve(color);
    }, 1000);
  });
}

function addColorEnd() {
  let newColor = prompt("ENter the color to add the Ending");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.push(newColor);
      resolve(color);
    }, 2000);
  });
}

function addTwoClorStart() {
  let color1 = prompt("Enter first color:");
  let color2 = prompt("Enter second color:");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.unshift(color1, color2);
      resolve(color);
    }, 3000);
  });
}

function deleteFirst() {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    color.shift();
      resolve(color);
    }, 4000);
  })
}


addColorStart().then((updatedArray1) => {
  console.log(updatedArray1);
  addColorEnd().then((updatedArray2) => {
    console.log(updatedArray2);
  });
  addTwoClorStart().then((updatedArray3) => {
    console.log(updatedArray3);
  });
  deleteFirst()
  .then((updatedArray4) => {
    console.log(updatedArray4);
  })
});
