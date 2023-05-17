/*slice() extracts a section of a string
and returns it as a new string,
without modifying the original string.*/


let fullName = "Paul Menendez";

console.log("Full Name: " , fullName);

let firstName = fullName.slice(0,fullName.indexOf(" "));
console.log("First Name: " , firstName);

let lastName = fullName.slice(fullName.indexOf(" "));
console.log("Last Name: " , lastName);