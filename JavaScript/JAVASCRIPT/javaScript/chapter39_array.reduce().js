//array.reduce() = reduces an array to a singe value

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


let prices = [15,10,30,15,20,25];

let total = prices.reduce(checkOut);

function checkOut(total,element){
    return total=total+element;
}

console.log(`The total is: $${total}`);
