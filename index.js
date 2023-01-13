var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "images/dice" + randomNumber1 +".png";
var randomDiceImg2 = "images/dice" + randomNumber2 +".png";

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    
}
if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!   🚩";
    
}
if (randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML="🚩      Draw!      🚩";
    
}
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);