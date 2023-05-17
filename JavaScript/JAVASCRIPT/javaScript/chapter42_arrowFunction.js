//ARROW FUNCTION = compact alternative to a traditional function

// =>
// You will need curly braces if your function uses more than 1 statement.

const greeting = (username) => console.log(`hello ${username}`);


greeting("Dude");

//ex2

const percent = (x,y) => x/y*100;

console.log(`${percent(75,100)}%`);

//ex3

let grades = [100,50,90,60,80,70];

grades.sort((x,y) => y-x);

grades.forEach((item) => console.log(item));


