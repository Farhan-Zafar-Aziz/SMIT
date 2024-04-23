//  My code logic

function checkUser() {
    var userMail = localStorage.getItem("email")
    var userpass = localStorage.getItem("password")
    console.log(userMail, "userEmail");
    if (userMail !== null && userpass !== null) {
    window.location.pathname = "main.html"
    } else {
       console.log(window.location.pathname);
       if(window.location.pathname !== "/index.html") {
        window.location.pathname = "index.html"
       }
    }
}

function logout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        alert("User logout successful");
        window.location.pathname = "index.html";
      } 

    function login() {
        var email = document.getElementById("email")
        var password = document.getElementById("password")

        if (email.value !== "" && password.value !== "" ) {
            localStorage.setItem("email", email.value)
            localStorage.setItem("password", password.value)
            alert("Log in successfull")
            window.location.pathname = "main.html"
         } else {
           alert("Please enter email and password")
         }
         
    }









    // var months = ["jan", "feb", "mar", "apr"];
// var date = new Date();
// console.log(months[date.getMonth()]);

//  Trainer code 

// function checkUser() {
//     var userEmail = localStorage.getItem("email");
//     var userPsw = localStorage.getItem("password");
//     console.log(userEmail, "userEmail");
//     if (userEmail !== null && userPsw !== null) {
//       window.location.pathname = "main.html";
//     } else {
//       console.log(window.location.pathname);
//       if (window.location.pathname !== "/index.html") {
//         window.location.pathname = "index.html";
//       }
//     } 
//   }
  
//   function logout() {
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//     alert("User logout successful");
//     window.location.pathname = "index.html";
//   }
  
//   function login() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
  
//     if (email.value !== "" && password.value !== "") {
//       localStorage.setItem("email", email.value);
//       localStorage.setItem("password", password.value);
//       alert("login successful");
//       window.location.pathname = "main.html";
//     } else {
//       alert("Email and password empty");
//     }
//   }