
var randomDice1;
var randomDice2;

function player1(){
    var diceArr1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var times1 = diceArr1.length;
randomDice1 = Math.floor(Math.random()*times1);
var dices1 = diceArr1[randomDice1];
document.querySelector(".img1").setAttribute("src" , dices1);
}

function player2(){
    var diceArr2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var times2 = diceArr2.length;
randomDice2 = Math.floor(Math.random()*times2);
var dices2 = diceArr2[randomDice2];
document.querySelector(".img2").setAttribute("src" , dices2);
}

function winScore(){
    if(randomDice1 > randomDice2){
        document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
        document.querySelector(".p1").innerHTML = "You have my sympathy";
        document.querySelector(".p2").innerHTML = "How dare you!";

    }
    else if(randomDice1 < randomDice2){
        document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
        document.querySelector(".p1").innerHTML = "ooAAA! Why me";
        document.querySelector(".p2").innerHTML = "Better luck next time";

    }
    else if(randomDice1 === 5 && randomDice2 === 5){
        document.querySelector("h1").innerHTML = "Refresh Me";
        document.querySelector(".p2").innerHTML = "I am just warming up";
        document.querySelector(".p1").innerHTML = "_____....";

    }else{
        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelector(".p1").innerHTML = "You call this a talent?";
        document.querySelector(".p2").innerHTML = "_____....";
    } 
}

function dice(){
    player1();
    player2();
    winScore();
}

dice();



