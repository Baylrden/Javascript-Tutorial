// array.forEach() = executes  provided callback function
//   once for each array element

let fruits = ["mango","banana","apple","cherry"];

fruits.forEach(capitalize);
fruits.forEach(print);

function capitalize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(item){
    console.log(item);
}



