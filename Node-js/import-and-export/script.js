const arr = ["gareen","red"];

// alert(arr);

// add that color to the beginning of the array. Display the updated
// array in your browser.

let arr2 = prompt("chose your color");
arr.unshift(arr2);
// alert(arr);

// B. Ask the user what color he/she wants to add to the end & add
arr2 = prompt("choser the color add  the end :");
arr.push(arr2);
// alert(arr);

arr2 = prompt("chose the clor to add at the staring :");
arr.unshift(arr2);
// alert(arr);


// C. Add two more colors to the beginning of the array. Display the
// updated array in your browser.

arr.pop(arr2);
// alert(arr);

// F. Ask the user at which index he/she wants to add a color & color

let index = Number(prompt("which index you want to add the color :"));
arr2 = prompt("which color do you want to add ?:");
arr.splice(index,0,arr2)
// alert(arr);

let index1 = Number(prompt("which index do want delete :"));
arr2 = Number(prompt("How many colors do you want to delete?"));
arr.splice(index1,arr2);
// alert(arr);