// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array

var item = document.getElementById('items');

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Enter your order Sir/Ma'am ?");

for (let i = 0; i < A.length; i++) {
    if(input === A[i]) {
        item.innerHTML = `<h1>Your order is ${input}.</h1>`
    } 
     else {
        item.innerHTML = 'your order is not available.'
    }
    
}