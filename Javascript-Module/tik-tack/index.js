var box = document.getElementById("boxes");
// var clearbox = document.getElementById("clearBox");

for (let i = 0; i < 18; i++) {
    let remainder = i % 2;
    if(remainder == 0) {
        box.innerHTML += `<div class='box' onclick='{deleteBox(this)}'></div>`
        // box.innerHTML += `<div id=${i} class='box' onclick='{deleteBox(${i})}'></div>` // ham index ki help se bhi function wala kam anjam de skty hn
       }
}

let firstClick = true;

function deleteBox(param) {
    //  param.style.backgroundColor = "red"
    if (firstClick === true) {
        param.innerHTML =  `<img src="https://static-00.iconduck.com/assets.00/tick-mark-icon-512x444-fknht64j.png"/>`
        firstClick = false;
    }else {
        param.innerHTML =  `<img src="https://static-00.iconduck.com/assets.00/cross-mark-emoji-512x512-9lmr75ja.png"/>`
        firstClick = true
    }
}

// function clearBox() {
//     let reset = document.getElementsByClassName("box");
//     reset.style.display = "none"
//     clearbox.innerHTML = `${reset}`
// }

// function deleteBox(id) {
//     let index = document.getElementById(id);
//     // index.style.backgroundColor = "blue"
//     index.innerHTML = `<img src="https://static-00.iconduck.com/assets.00/tick-mark-icon-512x444-fknht64j.png" width=${20} height=${20}/>`
// }