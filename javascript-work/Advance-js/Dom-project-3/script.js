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

document.getElementById("name").value = "";
document.getElementById("studentClass").value = "";
}

// takeData();

// console.log(document.getElementById);
