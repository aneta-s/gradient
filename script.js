//1. read what the value in css format of the both inputs are
var css = document.querySelector("h3");
//2. select both inputs
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var initBody = "linear-gradient(to right, " + initColor1 + "," + initColor2 +")";
var initColor1 = "#C7DAC7";
var initColor2 = "#FE8E7B";


function setRandomGradient(firstColor, secondColor){
    body.style.background = 
    "linear-gradient(to right, "
    + firstColor
    + ","
    + secondColor
    + ")";
    css.textContent = body.style.background + ".";
}

function setRandomColor(){
var firstColor = '#' + (Math.random().toString(16)+ "000000").substring(2, 8);
var secondColor = '#' + (Math.random().toString(16)+ "000000").substring(2, 8);
setRandomGradient(firstColor, secondColor);
};


//6. DRYF
function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ","
    + color2.value
    + ")";

    css.textContent = body.style.background + ".";
}
color1.value = initColor1;
color2.value = initColor2;
css.textContent = initBody + ";";


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);
