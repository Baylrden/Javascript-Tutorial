//function expression = function without a name (anonymous function)
//                   avoid polluting the global scope with names
//                    write it, then forget about it



// HTML BODY:

// <label for="" id="myLabel">0</label>
//      <button id="decreaseButton" onclick="decreaseCount()">decrease</button>
//      <button id="increaseButton" onclick="increaseCount()">increase</button>


     
const greeting = function(){
    console.log("hola");
}

greeting();
let count = 0;
document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("myLabel").innerHTML = count;
}



//ex2:
// let count = 0;
// function increaseCount(){
//     count++;
//     document.getElementById("myLabel").innerHTML = count;
// }

// function decreaseCount(){
//     count--;
//     document.getElementById("myLabel").innerHTML = count;
// }
