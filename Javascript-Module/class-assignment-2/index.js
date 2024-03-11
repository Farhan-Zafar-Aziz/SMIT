

var div = document.getElementById('display')

function tableGenerator() {
    div.innerHTML = ''
    var input = document.getElementById('table').value;
    for (var i = 1; i < 11; i++) {
           div.innerHTML += `<h3>${input} x ${i} = ${input*i}</h3>`  
          }
}

// let num1 = +prompt('enter the number')
// let num2 =  prompt('enter the number')

// var result = Number(num1,num2)
// // num1 - num2;
// result = num1 + num2

// alert(result);


// alert(result)
