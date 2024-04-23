const display = document.getElementById("tableDisplay");

function tableGenerator() {

    let input = document.getElementById("table").value 
    display.innerHTML = ''
    for(let i = 1; i < 11; i++) {
        display.innerHTML += `<h3>${input} X ${i} = ${input*i}</h3>`
    }

}

