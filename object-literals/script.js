// Question:


// Create a JavaScript object called student using object literal syntax with the following properties:

// name (string)
// age (number)
// grade (string)
// subjects (array of strings)

// Then:

// Print the student’s name
// Add a new property isPassed and set it to true
// Update the age property
// Print all subjects using a loop



let student = {
  name :"sajid",
  age : 20,
  grade : "A",
  subject : ["Math","Science","English"]
}


console.log(student.name);
student.isPasss = true;

student.age = 23;
console.log(student.age);


for (let i = 0; i < student.subject.length; i++) {
  console.log(student.subject[i]);
  
  
}


// Question:

// Create a JavaScript object called car using object literal syntax with the following properties:

// brand (string)
// model (string)
// year (number)
// features (array of strings)

// Then:

// Print the car’s brand and model together
// Add a new property isElectric and set it to false
// Change the year to a newer value
// Add a new feature to the features array
// Print all features using a loop





let car = {
  brand : "cvic",
  model : "2024",
  year : 2026,
  feture : ['a','b','c']
}

console.log(car.brand,car.model);

car.isElectiirc = false;
// console.log(isElectiirc);
car.year = 2028;
console.log(car.year);

car.feture.push("ff");
for (let i = 0; i < car.feture.length; i++) {
  console.log(car.feture[i]);
    
}



// Create a function constructor to represent a Student with properties like name and age


function Student(name,age) {
  this.name = name;
  this.age = age;
}

let s1 = new Student("sajid",20);
let s2 = new Student("Ali",22);
console.log(s1);
console.log(s2);




// Create a function constructor for a Bank Account with account holder name and balance, and include a method to deposit money.



function BankAccount(userName,balance) {
  this.userName = userName;
  this.balance = balance;
  this.deposit = (function(amount) {
    this.balance += amount; 
    console.log("deposite money ",amount);
    
  })
}

let b1 = new BankAccount("ali",12000);
b1.deposit(1000);
console.log(b1);


// Create a function constructor for a Person and add a method using prototype to display the person’s name.


function Person (name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("my name is ",this.name);
  
}

let p1 = new Person("sajid");
console.log(p1);
