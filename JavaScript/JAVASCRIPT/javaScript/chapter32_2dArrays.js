// 2D array = An array of arrays

let fruits = ["bananas","apples","oranges"];
let vegetables = ["potatos","domatoes","onions"];
let meats = ["chicken","sheep","fish"];


let groceryList = [fruits,vegetables,meats];

groceryList[0][0] = "mangoes";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}