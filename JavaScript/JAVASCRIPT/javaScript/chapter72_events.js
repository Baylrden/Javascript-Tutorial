
const element = document.getElementById("myButton");
//element.onclick = doSMTH;
//we don't use "()" because it's a callback.

function doSMTH(){
    alert("you did smth dude");
}

const element2 = document.body;
//element2.onload = doSMTH;


const element3 = document.getElementById("myText");
element3.onchange = doSMTH;

const element4 = document.getElementById("myDiv");


function doSMTHLOL(){
    element4.style.background = "red";
}

element4.onmouseover=doSMTHLOL;
element4.onmouseout=doSMTHELSE;

function doSMTHELSE(){
    element4.style.backgroundColor = "blue";
}

//HTML BODY:
/*
<button id="myButton">button</button>
<input id="myText">
<div id="myDiv"></div>
*/

//CSS SIDE:

/*
#myDiv{
    background-color: blue;
    width: 100px;
    height: 100px;
}
*/