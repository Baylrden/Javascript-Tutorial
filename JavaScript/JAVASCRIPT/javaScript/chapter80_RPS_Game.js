/*
HTML BODY:

<div id="gameDiv">
    <h1 class="gameText" id="playerText">Player: </h1>
    <h1 class="gameText" id="computerText">Computer: </h1>
    <h1 class="gameText" id="resultText">Result: </h1>

    <button class="choiceBtn">ROCK</button>
    <button class="choiceBtn">PAPER</button>
    <button class="choiceBtn">SCISSORS</button>
   </div>


   CSS SIDE:

   #gameDiv{
    font-family: cursive;
    border: 3px dashed;
    border-radius: 25px;
    padding: 10px;
    background-color: lightgrey;
    text-align: center;
    

}

.choiceBtn{
    line-height: 30px;
    color: red;
    background-color: blue;
    font-family: cursive;
    border-radius: 10px 15px 10px 15px;
    width: 130px;
    font-weight: bolder;
}

.choiceBtn:hover{
    transform: scale(1.09);
    transition: 1s;
    color: blue;
    background-color: red;
}

#playerText{
    color: blue;
}

#computerText{
    color: red;
}

#resultText{
    color: green;
}

*/

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click",()=> {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();


}));

function computerTurn(){
    const randNum = Math.floor(Math.random()* 3)+ 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        
        case 2:
            computer = "PAPER";
            break;
        
        case 3:
            computer = "SCISSORS";
            break;    
    }
}

function checkWinner(){
    if(player== computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER")? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS")? "You Win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK")? "You Win!" : "You Lose!";
    }
}