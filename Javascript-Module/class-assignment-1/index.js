
// var main = document.getElementById('main');
//  // using id from html file in Js to process replacing and styling actions in a function and some logical way using Js .
// // replacing and styling data in Js file 

// main.style.display = 'flex',
// main.style.height = '100vh',
// main.style.justifyContent = 'center',
// main.style.alignItems = 'center',
// main.style.color = 'blue',
// main.style.fontSize = '50px'

// main.innerHTML +=  '<h1>Hello</h1>' // Hello JavascriptHello
// // NOTE:  donu files ka data show hoga due to plus operator it means phely waly data k sath new data ko add kr k show kro

// main.innerHTML =  '<h1>Hello</h1>' // innerHtml show Js data in browser like Html data

// var mains = document.getElementById('main');

// let crktTeam = ([
//     'Babar','Rizwan','Fakhar','Imam', 
// ],
var obj = [
     {
      catogry1: '( Batsman )',
     },
     {
      baller: '( Bowller )',
     },
     {
      alrounder: '( All rounder )',
     }
]
// console.log(obj[1].baller)

let batsmans = ['Babar','Rizwan','Fakhar','Imam', 'Haider'];

for (let i = 1; i < batsmans.length; i++) {
     // main.innerHTML += `<h3>${i} ${batsmans[i]} ( Batsman ) </h3>`;
}

let allRounders = ['Shadab Khan','Iftikhar','Shoaib Malik'];

for (let i = 1; i < allRounders.length; i++) {
     // main.innerHTML += `<h3>${i} ${allRounders[i]} ( All Rounder )</h3>`;
}

let bowllers = ['Haris Rauf','Shaheen Afridi','Hassan Ali','Dhani'];

for (let i = 0; i < bowllers.length; i++) {
     // main.innerHTML +=`<h3>${bowllers[i]} ( Bowller )</h3>`;
}


var main = document.getElementById('main');

let palyers = ['Babar','Rizwan','Fakhar','Imam', 'Haider','Shadab Khan','Iftikhar','Shoaib Malik','Haris Rauf','Shaheen Afridi','Hassan Ali','Dhani'];

for(let a = 1; a < 5; a++){
     // console.log(a,palyers[a], "( Batsman )");
     main.innerHTML += `<h3>${a}. ${palyers[a]} ( Batsman )</h3>`;
}

for (let b = 5; b < 9; b++) {
     // console.log(a,palyers[a], "( All Rounders )");
     main.innerHTML += `<h3>${b}. ${palyers[b]} ( All Rounders )</h3>`;
}

for (let c = 9; c < 12; c++) {
     // console.log(c,palyers[c], "( Bowler )");
     main.innerHTML += `<h3>${c}. ${palyers[c]} ( Bowler )</h3>`;
}
// for(count = 0; count < batsmans.length & allRounders.length & obj.length; count++) {
     // console.log(`${count} ${batsmans[count]} ${obj[0].catogry1}`);
     // console.log(allRounders[count],obj[2].alrounder)
     // console.log(bowllers[count],obj[1].baller)

// console.log(`palyer: ${count} ${crktTeam[count]} ${obj[0].catogry1}`)
// console.log('Catagory:',crktTeam[count].catagory)
// }