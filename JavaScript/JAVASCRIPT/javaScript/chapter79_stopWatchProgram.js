/*
HTML BODY:

<div id="timeContainer">
    <div id="timeDisplay">00:00:00</div>
    <button id="startBtn" class="timerBtn">Start</button>
    <button id="pauseBtn" class="timerBtn">Pause</button>
    <button id="resetBtn" class="timerBtn">Reset</button>

</div>

CSS SIDE:

.timerBtn{
    width: 80px;
    height: 30px;
    border: 3px solid;
    border-radius: 12px;
    background-color: #333333;
    color: white;
    cursor: pointer;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#timeDisplay{
    font-size: 75px;
    color: #40c437;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

#timeContainer{
    text-align: center;
    border: 3px solid;
    border-radius: 25px;
    background-color: #222222;
}

*/


const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,75)
    }
});


pauseBtn.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});


resetBtn.addEventListener("click",()=>{
    paused = true;
    clearInterval(intervalId);
 startTime = 0;
 elapsedTime = 0;
 currentTime = 0;
 hrs = 0;
 mins = 0;
 secs = 0;
 timeDisplay.textContent = "00:00:00";

});

function updateTime(){

    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000 % 60));
    mins = Math.floor((elapsedTime / (1000*60)) % 60);
    hrs =  Math.floor((elapsedTime / (1000*60*60)) % 60);

   

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;


    function pad(unit){
        return (("0")+unit).length > 2 ? unit : "0" + unit;
    }
}
