<<<<<<< HEAD
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

let B = prompt("Serch the value in the data");
let find = false;
for (let i = 0; i < A.length; i++) {
    if (B === A[i]) {
     find = true;
     break;   
    }    

}

if (find) {    
    alert("the item is found ");
} else {
    alert("item is not found ");
}


=======
let num = prompt("Enetr a number :");
num = Number(num);

if (num > 0) {
    alert("number is positive")
} else if (num < 0) {
    alert("the number is negative")
} else {
    alert("the number is zero")
}
>>>>>>> 9024aec (1st assigment of the js)
