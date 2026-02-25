let passwor1 = prompt("Enetr the first password ");
let passwor2 = prompt("Enetr the confrom password :");

if (passwor1 == "" || passwor2 == "") {
    alert ("plaese Enetr the paswwor")
} else if (passwor1 === passwor2) {
    alert("password is correct ");
} else {
    alert ("palease check again confrom password it not correct");
} 