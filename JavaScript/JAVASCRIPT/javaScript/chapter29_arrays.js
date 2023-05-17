// array = think of it as a variable
//that can store multiple values

let fruits = ["apple", "orange", "banana"];

console.log(fruits[1]); //reachs element in 1 index. first index is 0.

fruits[0] = "coconut";

fruits.push("lemon"); //add an element
fruits.pop(); //removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift(); //removes element from beginning


let length = fruits.length;
let index = fruits.indexOf("apple");

console.log(fruits);