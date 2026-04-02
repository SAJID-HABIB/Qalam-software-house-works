// Spread Operator & Rest Parameters
let fruits = ["apple", "mango"];
let veggies = ["carrot", "potato"];

let food = [...fruits, "sajid", ...veggies];

// reast paremetr

let total = 0;
function sum(...num) {
  num.forEach((a) => {
    total += a;
    console.log(total);
  });
}

sum(1, 2, 3);

console.log(total);
