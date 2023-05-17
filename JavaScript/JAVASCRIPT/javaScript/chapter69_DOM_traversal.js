// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSiblig
// .children[]
// Array.from(.children)



//HTML BODY:
/*

<ul id="fruits">fruits
<li>apple</li>
<li>orange</li>
<li>banana</li>
</ul>

<ul id="vegetables">vegetables
<li>carrots</li>
<li>potatoes</li>
<li>onions</li>
</ul>

<ul id="desserts">desserts
<li>ice cream</li>
<li>cake</li>
<li>pie</li>
</ul>

 <script  src="index.js"></script>

*/




let element = document.body;

let child = element.firstElementChild;
child.style.backgroundColor = "blue";

//when we select lastElementChild, it means we selected script element
//thats why nothing changes.

let vegetables = document.querySelector("#vegetables");

vegetables.style.backgroundColor = "red";


let sibling = vegetables.nextElementSibling;
sibling.style.backgroundColor = "green";
//and previous is fruits section.


let fruits = document.querySelector("#fruits");
let child2 = fruits.firstElementChild;
child2.style.backgroundColor = "yellow";
//and lastElementChild will be banana.
let children = Array.from(fruits.children);
children.forEach(child=> child.style.backgroundColor = "lightblue");

