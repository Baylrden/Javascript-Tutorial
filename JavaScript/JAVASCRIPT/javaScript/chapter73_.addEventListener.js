//  .addEventListener(event,function,useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click",changeYellow);
outerDiv.addEventListener("click",changeYellow,true);
//well, true makes outer div to be handled first.

function changeYellow(){
    alert(`you selected ${this.id}`);
    this.style.backgroundColor = "yellow";
}


/*
innerDiv.addEventListener("mouseover",changeRed);
innerDiv.addEventListener("mouseout",changeBlue);


function changeRed(){
    innerDiv.style.backgroundColor = "red";
}

function changeBlue(){
    innerDiv.style.backgroundColor = "blue";
}
*/


//HTML BODY:
/*
<div id="outerDiv">

<div id="innerDiv"></div>

   </div>

<script  src="index.js"></script>
*/

//CSS SIDE:

/*
#innerDiv{
    background-color: blue;
    width: 100px;
    height: 100px;
    border: 1px dashed;
}

#outerDiv{
    background-color: blue;
    width: 300px;
    height: 300px;
    
}
*/

