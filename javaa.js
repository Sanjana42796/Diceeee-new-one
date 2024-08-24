var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


/*function determineWinner(randomNumber1, randomNumber2) {
    var player1Wins = (randomNumber1 % 2 !== 0 && randomNumber1 > randomNumber2);
    var player2Wins = (randomNumber2 % 2 === 0 && randomNumber2 > randomNumber1);

    if (player1Wins) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
    } else if (player2Wins) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
    }
}

determineWinner(randomNumber1, randomNumber2);*/








    if (randomNumber1===5){
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
    } 
 else if(randomNumber2===6){
        document.querySelector("h1").innerHTML = "Player 2 Wins !🏆 ";
    }else{
        document.querySelector("h1").innerHTML = "No one wins! 🤝";

    }








/*if (randomNumber1 % 2 === 1 && (randomNumber1 > randomNumber2)){
    document.querySelector("h1").innerHTML=("Player 1 winns!!!");
}
else if(randomNumber2%2===0 &&(randomNumber2>randomNumber1 )){
    document.querySelector("h1").innerHTML=("player 2 winns!!!");
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw";}
else{
    document.querySelector("h1").innerHTML="Invalid!!!";
}*/







/*var highestNumber = Math.max(randomNumber1, randomNumber2);

if (highestNumber === randomNumber1 && highestNumber % 2 !== 0) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉" ;
} else if (highestNumber === randomNumber2 && highestNumber % 2 === 0) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 ";
}*/






/*if (randomNumber1 = Math.max(randomNumber1 % 2 !== 0) && randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
} else if (randomNumber2 = Math.max(randomNumber2 % 2 === 0) && randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
}*/



