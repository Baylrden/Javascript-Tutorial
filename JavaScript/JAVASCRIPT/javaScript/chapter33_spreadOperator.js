//spread operator : ...



let numbers = [1,2,3,4,5,6,7,8,9];
let max = Math.max(...numbers);
console.log(max);

let team1 = ["Ghost","Cpt.Price","Soap"];
let team2 = ["Mason","Sgt.Moody","Jason Hudson"];

team1.push(...team2);

console.log(...team1);