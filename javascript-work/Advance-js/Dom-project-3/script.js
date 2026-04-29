// let getData = document.getElementById("name");
// let setData = document.getElementById("studentClass");




function takeData() {
  
  let name = document.getElementById("name").value;
  let studentClass = document.getElementById("studentClass").value

  if (name == "" || studentClass == "") {
    return;
  }

let data = JSON.parse(localStorage.getItem("Students")) || [];
  
  let obj = {
    name : name,
    class : studentClass
  };
data.push(obj);
localStorage.setItem("Students", JSON.stringify(data));

showText();


document.getElementById("name").value = "";
document.getElementById("studentClass").value = "";
}

function showText() {
  let value1 = document.getElementById("name").value;
  let value2 = document.getElementById("studentClass").value;
  let data = {
    name : name,
    class : studentClass
  }
  localStorage.setItem("Students",JSON.stringify(data));
  document.getElementById("outPut").innerText = `${value1} ${value2}`; 

}

// window.onload = function () {
//   showText();
// }

// takeData();

// console.log(document.getElementById);
