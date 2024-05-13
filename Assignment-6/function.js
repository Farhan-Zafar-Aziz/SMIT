
// Chapter 38 Functions 

// function addDecimal(discountedPrice) {
//     var value = discountedPrice.toFixed(2)
//     return value
// }


// function applyDiscount(price) {
//     var farmula = (price * 50) / 100
//     return farmula
// }

// var discount1 = applyDiscount(70);
// console.log(discount1);


// Chapter 40 Switch Case Statemente 
//  switch(dayOfWk) {
//      case "Sat" :
//      alert("Whoopee");
//      break;
//      case "Sun" :
//      alert("Whoopee");
//      break;
//      case "Fri" :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
// }
    
//  Chapter 47 Events

function mouse() {
    alert("Hello JS!")
}

function front(card) {
    card.src = "https://opengameart.org/sites/default/files/king_of_hearts2.png";

}

function back(card) {
    card.src = "https://e7.pngegg.com/pngimages/747/964/png-clipart-jack-the-queen-of-hearts-playing-card-t-shirt-heart-playing-cards-king-heart.png"
}

function none(card) {
    card.style.display = "none"
}

// strin change into array using split() method

var cites = "karachi lahore queeta umerkot sukure";

var citiesList = cites.split(" ").toString() // to string method array can change into string 

console.log(citiesList);

// alert pop up 
function callAlert() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
}











