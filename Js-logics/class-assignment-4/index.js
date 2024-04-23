// var input = +prompt("enter your number")


// var round = Math.round(input).toString()
// document.write(`<h1>${round} ${typeof round}</h1>`)

// var str = Math.ceil(input)
// document.write(`<h1>${str}</h1>`)

// var floor = Math.floor(input)
// document.write(`<h1>${floor}</h1>`)

// var parse = (parseInt(20) + input)
// document.write(`<h1>${parse}</h1>`)


// console.log(typeof str);

var months = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
var currentDay = ["sun","mon","tue","wed","thu","fri","sat",]

var now = new Date()
var month = now.getMonth()
var today = months[month]
var days = now.getDay()
var today = currentDay[days]

var date = now.getDate()
var year = now.getFullYear()
var hours = now.getHours()
var mints = now.getMinutes()
var time = now.getTime()

console.log(now);
// console.log(today);
// console.log(date);
// console.log(year);
// console.log(hours);
// console.log(mints);
// console.log(time);
// console.log(date);