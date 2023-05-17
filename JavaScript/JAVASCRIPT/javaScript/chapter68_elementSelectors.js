//HTML BODY:

/*<h1 id="myTitle">This is the Menu</h1>
     
<input type="radio" name="fruits" value="apple" checked="checked">
<label for="apple">apple</label>

<input type="radio" name="fruits" value="orange">
<label for="orange">orange</label>

<input type="radio" name="fruits" value="banana">
<label for="banana">banana</label>

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

<div class="desserts">icecream</div>
<div class="desserts">cake</div>
<div class="desserts">pie</div>

<script  src="index.js"></script>*/






// let element = document.getElementById("myTitle");

// element.style.backgroundColor = "lightgreen";


//SELECTING ELEMENTS BY NAME
/*let fruits = document.getElementsByName("fruits");

console.log(fruits);

fruits.forEach(fruit=>{
    if(fruit.checked){
        console.log(fruit.value);
    }
})*/

// console.log(fruits[0]); can be used for selecting first element.


//SELECTING ELEMENTS BY TAG NAME
/*
let flag = document.getElementsByTagName("li");

flag[0].style.backgroundColor = "blue";
flag[1].style.backgroundColor = "red";
flag[2].style.backgroundColor = "green";
*/


//SELECTING ELEMENTS BY CLASS NAME
/*
let desserts = document.getElementsByClassName("desserts");

desserts[0].style.backgroundColor = "red";
desserts[1].style.backgroundColor = "black";
desserts[2].style.backgroundColor = "yellow";
*/

/*let selectWithID = document.querySelector("#myTitle");
selectWithID.style.backgroundColor = "blue";

let selectWithClass = document.querySelector(".desserts");
selectWithClass.style.backgroundColor = "yellow";*/

let selectALL = document.querySelectorAll("li");


selectALL.forEach(element=>{
    element.style.backgroundColor = "yellow";
    
});

