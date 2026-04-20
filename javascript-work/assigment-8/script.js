let color = [];

function addColorStart() {
  let newColor = prompt("ENter the color to add the beggning"); 
  // throw new Error("some thinf went rong");
   
  return new Promise((resolve, reject) => {
    if (!newColor || newColor.trim() === "") {
      reject("no color entered");
    } else {
      setTimeout(() => {
      color.unshift(newColor);
      resolve(color);
    }, 1000);
    }
  });
}

function addColorEnd() {
  let newColor = prompt("ENter the color to add the Ending");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      color.push(newColor);
      resolve(color);
      reject("Color not add the ending of the Array")
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

function deleteLast() {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    color.pop()
    resolve(color);
    reject("Last color not delete ");
    }, 5000);
  })
}


function addColIndex() {
  let index = Number(prompt("Enter the index to add the clor"));
  let addColor = prompt("which color do yo want to add");
  return new Promise ((resolve,reject) => {
    if (!index || !addColor || isNaN(index)) {
      return reject("invalid input");      
    }
    if (index < 0 || index > color.length) {
      reject ("index out of the range");
    }
    setTimeout(() => {
      color.splice(index,0,addColor);
      resolve(color);
    }, 6000);
  })
}




function deletColIndex() {
  let index = Number(prompt("Enter the index to delete the clor"));
  let deleteColor = prompt("which color do yo want to delete");
  return new Promise ((resolve,reject) => {
    if (!index || !addColor || isNaN(index)) {
      return reject("invalid input");      
    }
    if (index < 0 || index > color.length) {
      reject ("index out of the range");
    }
    setTimeout(() => {
      color.splice(index,deleteColor,0);
      resolve(color);
    }, 6000);
  })
}


async function runClor() {
  try {
    let updatedArray1 = await addColorEnd()
    console.log(updatedArray1);

    let updatedArray2 = await addColorStart();
    console.log(updatedArray2);

    let updatedArray3 = await addTwoClorStart();
    console.log(updatedArray3);

    let updatedArray4 = await deleteFirst();
    console.log(updatedArray4);

    let updatedArray5 = await deleteLast();
    console.log(updatedArray5);
    

    let updatedArray6 = await addColIndex();
    console.log(updatedArray6);
    
    let updatedArray7 = await deletColIndex();
    console.log(updatedArray7);
    
  } catch (error) {
    console.log(error);
    
  }
}

runClor();