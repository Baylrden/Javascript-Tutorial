//Map = object that holds key-value pairs of any data type

const store = new Map([

    ["t-shirt",20],
    ["jeans",30],
    ["socks",10]
]);

let shoppingCart=0;

shoppingCart+=store.get("t-shirt"); //getting value of any element in our map.
shoppingCart+=store.get("jeans");

store.set("hat",40); //adding new element to our map.

store.delete("socks"); //delete any item.

console.log(store.has("hat")); //checks if selected item is exists or not(true/false).


console.log(store.size);


console.log(shoppingCart);


store.forEach((value,key) => console.log(`${key}  $${value}`));