// Canvas API = a means for drawing graphics
//   used for animations, games, data visualitions.

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.font = "25px MV Boli";
context.fillStyle = "blue";

context.fillText("THIS IS THE WAY.",100,100);

//TRIANGLE:

/*
context.beginPath();

context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250);
context.lineTo(250,0);

context.stroke();
*/



//RECTS:

/*
context.fillRect(0,0,250,250);
context.strokeRect(0,0,250,250);
context.fillStyle = "black";
context.strokeStyle = "black";

context.fillRect(0,250,250,250);
context.strokeRect(0,250,250,250);
context.fillStyle = "red";
context.strokeStyle = "black";

context.fillRect(250,250,250,250);
context.strokeRect(250,250,250,250);
context.fillStyle = "blue";
context.strokeStyle = "black";

context.fillRect(250,0,250,250);
context.strokeRect(250,0,250,250);
context.fillStyle = "green";
context.strokeStyle = "black";
*/

//CIRCLE:

/*
context.fillStyle = "red";
context.lineWidth = 5;

context.beginPath();

context.arc(100,100,100,0,2* Math.PI);

context.stroke();
context.fill();
*/


//HTML BODY:

//<canvas id="myCanvas" width="500" height="500"></canvas>

//CSS SIDE:

/*
#myCanvas{
    border: 2px solid black;
}
*/