var input = document.getElementById("todoInput");
var list = document.getElementById("list");


function add() {
    let data = [];

     data = input.value;
     console.log(data);
     list.innerHTML += `<li class="lists" onclick="remove(this)">${data} <button class="cut">CUT</button></li>`
     input.value = "";
    }

    function remove(cut) {
        cut.style.display = "none"

    }