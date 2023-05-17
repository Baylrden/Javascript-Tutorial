// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

/*const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("enter your name:");
document.body.append(nameTag); //demonstration in BODY*/


const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
//myList.append(listItem); 
//myList.prepend(listItem);

myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);


//HTML BODY:

/*
<ul id="fruit">
<li>apple</li>
<li>orange</li>
<li>banana</li>
</ul>
*/
