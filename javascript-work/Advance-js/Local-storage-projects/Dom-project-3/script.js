// let getData = document.getElementById("name");
// let setData = document.getElementById("studentClass");

let getBtn = document.getElementById("btn2");


function setData() {
  
  let name = document.getElementById("name").value;
  let studentClass = document.getElementById("studentClass").value

  if (name == "" || studentClass == "") {
    return;
  }

  let stored = localStorage.getItem("Students");
let data = [];
  if (stored) {
    try {
      data = JSON.parse(stored);
      if (!Array.isArray(data)) {
        data = [];
      }
    } catch (e) {
      data = [];
    }
  }
  let obj = {
    id : Date.now(),
    name : name,
    class : studentClass
  };
data.push(obj);
localStorage.setItem("Students", JSON.stringify(data));

// showText();


document.getElementById("name").value = "";
document.getElementById("studentClass").value = "";
}

let showText =  getBtn.addEventListener("click",() => {
  let value1 = document.getElementById("name").value.trim();
  let value2 = document.getElementById("studentClass").value.trim();
  // if (value1 == "" || value2 == "") {
  //   alert("please all the field");
  //   return;
  // }
  let data = {
    name : value1,
    class : value2
  };
  
   let stored = JSON.parse(localStorage.getItem("Students")) || [];
   
  

  stored.push(data);
  localStorage.setItem("Students",JSON.stringify(stored));

  // let outPut = "";

  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  stored.forEach(student => {
    if (student.name && student.class) {
       tableBody.innerHTML += `
    <tr>
    <td>${student.name}</td>
    <td>${student.class}</td>
    <td>
    <button onclick="deletData(${student.id})">Delete</button>

    </td>
    
    </tr>
    `;
    }
   
  });

})

window.onload = function() {
showText();
}

function deletData(id) {
  let stored = JSON.parse(localStorage.getItem("Students")) || [];
  stored = stored.filter(student => student.id  !== id);
  localStorage.setItem("Students",JSON.stringify(stored));

  showText();
}

// function getData () {
  
// }

// getBtn.addEventListener("click",() => {
//   let result = "";
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let data = localStorage.getItem(key);
//     result += `${key} ${data}`;
//   }

//   document.getElementById("outPut").innerHTML = result;
// })




// getData();
// window.onload = function () {
//   showText();
// }

// setData();

// console.log(document.getElementById);
