// data types 
var string = "string data type";
var number = 123;
var boolean = true/false;
var undefine = undefined;
var list = []; //array 
var obj = {}; //object
var nul = null ; 

// array a type of list in which we can itrate multiple data at a time  
var dishes = ["biryani","kabab","rogni naan","dahi haandi"];
 // getting result with whole array
console.log(dishes[0]); //getting result with indexes 
// [0] square bracket using for data index

// array methods 
// adding data using "push("")" method 
dishes.push("new data");
console.log(dishes);
// removing data using 
 dishes.pop()
console.log(dishes)
// and some other methods shift, unshift, splice and slice 

// loop for using itratation of all data in at once time 
for (let i = 0; i < dishes.length; i++) {
    console.log(i,dishes[i]);
}

// document.write is a method which shows result in browser field 
document.write(dishes[0] + "<br>");
document.write(dishes[1] + "<br>");
document.write(dishes[2] + "<br>");
document.write(dishes[3] + "<br>");

// Logical operators
let n = 5;
console.log(n >= 5 && n < 10); // true
console.log(n > 5 && n < 10); // false
console.log(n >= 5 || n < 10); // true
console.log(n > 5 || n < 10); // true
console.log(!(n < 10)); // false
console.log(!(n > 10)); // true

//  Arthimatic operators 
let n1 = 10;
let n2 = 2;

let result = n1 - n2;
console.log(`${n1} - ${n2} = ${result}`); // 10 - 2 = 8

let result1 = n1 + n2;
console.log(`${n1} + ${n2} = ${result1}`); // 10 + 2 = 12

let result2 = n1 * n2;
console.log(`${n1} * ${n2} = ${result2}`); // 10 * 2 = 20

let result3 = n1 / n2;
console.log(`${n1} / ${n2} = ${result3}`); // 10 / 2 = 5

let result4 = n1 % n2;
console.log(`${n1} % ${n2} = ${result4}`); // 10 % 2 = 0

// if, else if conditions 
let x = prompt("Where does the Pope live?");
let correctAnswer = "Pakistan";
if (x == correctAnswer ) {
alert("Correct!");
 } else {
alert("Wrong!");
}

// table board
for (let i = 1; i < 11; i++) {
    document.write("2 x " + i +  ' =', 2*i ,'<br>');
}

let table = +prompt("enter your desire table...");

document.write("<h3 class='alignment'> Table of " + table + "</h3>");

function generateTable() {
    var table = document.getElementById("table");
    var counts = document.getElementById("counts")
for (var i = 1; i <= counts.value; i++) {
    document.write("<h3 class='tableRow'>" + table.value + " x " + i + "=" , table.value*i + "</h3>")
}
}
// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); //  open the blank prompt window
sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"
