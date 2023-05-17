/*Template literals = delimited with(`)

instead of double or single quotes

allows embedded variables and expressions*/

let userName = "Dude";

let total=75;



//console.log(`Hello ${userName}`);
//console.log(`You have $${total}`);

let text = `Hello ${userName} <br>
You have $${total}`;


document.getElementById("myLabel").innerHTML = text;