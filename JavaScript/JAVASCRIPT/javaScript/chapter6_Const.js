// const = a variable that can not be changed.

const PI = 3.14;

let radius;
let circumference;

radius = window.prompt("Enter the radius: ");

radius=Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is : " , circumference);