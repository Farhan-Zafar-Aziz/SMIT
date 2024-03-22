const bulb = document.getElementById("bulbOn");
const bulbOf = document.getElementById("bulbOff");

bulb.innerHTML = '<img class="bulb" src="/offbulb.png"/>'

function lighton() {
    bulb.innerHTML = '<img class="bulb" src="/onbulb.png"/>'
}

function lightoff() {
    bulb.innerHTML = '<img class="bulb" src="/offbulb.png"/>'
}