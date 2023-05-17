/*HTML BODY:

 <h1>Number Guessig Game</h1>
     <p>pick a Number between 1-10</p>
     <label for="">Enter a guess</label>

     <input id="guessField">
     <input type="submit" id="submitButton">
     

    <script src="index.js"></script>
    */



const answer = Math.floor(Math.random()*10+1);

let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    document.getElementById("guessField").value;
    guesses++;

    if(guesses==answer){
        alert(`${answer} is the #.It took you ${guesses} guesses.`)

    }
    else if(guesses<answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }


}

