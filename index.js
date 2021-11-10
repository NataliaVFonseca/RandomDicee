//Calculo do primeiro jogardor 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomImageSource3 = "images/dice" + randomNumber3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

var resultado1 = randomNumber1 + randomNumber2 + randomNumber3
document.querySelector(".resultado1").innerHTML = resultado1;

//Calculo do segundo jogardor 

var randomNumber4 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber4 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[3];
image1.setAttribute("src", randomImageSource);

var randomNumber5 = Math.floor(Math.random() * 6) + 1;
var randomImageSource5 = "images/dice" + randomNumber5 + ".png";
document.querySelectorAll("img")[4].setAttribute("src", randomImageSource5);

var randomNumber6 = Math.floor(Math.random() * 6) + 1;
var randomImageSource6 = "images/dice" + randomNumber6 + ".png";
document.querySelectorAll("img")[5].setAttribute("src", randomImageSource6);

var resultado2 = randomNumber4 + randomNumber5 + randomNumber6
document.querySelector(".resultado2").innerHTML = resultado2;

//If player 1 winssd
if (resultado1 > resultado2 ) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (resultado2 > resultado1 ) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
