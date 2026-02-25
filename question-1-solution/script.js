let num1 = prompt("Enetr first number :");
num1 = Number(num1);
let num2 = prompt("Enetr the 1st number :");
num2 = Number(num2);


let oprators = prompt("chose the oprators in this (+,-,*,/,%)");

let result = 0;
if (oprators == "+") {
    result = num1 + num2;
} else if (oprators == "-") {
    result = num1 - num2
} else if (oprators == "*") {
    result = num1 * num2;
} else if (oprators == "/") {
    result = num1 / num2;
} else if (oprators == "%") {
    result = num1 % num2;
} else {
    result = "invlaid oprator"
}

alert("the result is :"+result);