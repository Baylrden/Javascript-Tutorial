//Type conversion = change the dataType of a value to another
// (strings,numbers,booleans)

let age = window.prompt("How old are you? ");

console.log(typeof age);

age = Number(age); //converting string to number
age+=1;
console.log("Happy Birthday! You are " , age , "years old");

console.log(typeof age);


let x;
let y;
let z;

x= Number("3.14");
console.log( "Type of X:" ,typeof x);

y =String(3.14);

console.log( "Type of Y:" , typeof y);

z = Boolean("") //if booleans includes empty string,then its false.if not empty,its true.

console.log( "Result of Z:" ,  z);

