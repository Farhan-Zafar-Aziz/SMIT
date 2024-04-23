// var box = document.getElementById("boxes");

// // box.innerHTML = `<h1 onclick={deletemsg(this)}>Hello Javascript!</h1>`;

// // function deletemsg(key) {
// //     key.style.display = "none"
// // }

// for(let i = 1; i < 29; i++) {
//     let reminder = i % 2; 
//     // console.log(reminder);   
//     if (reminder == 0) {
//     box.innerHTML += '<div class="box" onclick={deleteBox(this)} style="background-color: black"></div>'
//     } else {
//     box.innerHTML += '<div class="box" onclick={deleteBox(this)} style="background-color: white"></div>'
//     }
// }


// function deleteBox(param) { // onclick function py style dene k liye parameter pass krna ta k us py koi action perform kr saken
//     param.style.display = "none" // delete krna
//     // param.style.backgroundColor = "red"
// }

let array = ['Aalu','Chamata','Wangan','Meha'];

for(let i = 0; i < array.length; i++) {
    document.write(`<h3>${i} ${array[i]}</h3>`); // document.write se aap fully JS file ki logic ki data ko browser main show krwa sakty hain
}