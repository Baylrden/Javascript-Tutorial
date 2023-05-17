//window = interface used to talk to web browser
//   the DOM is a property of the window

//console.dir(window);

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);

// console.log(window.location.hostname);


// console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click",()=> window.open("https://google.com"));

// window.close: closes recent window.
// window.print : prints recent window.
// window.confirm("Press OK to continue.");


//HTML BODY:

// <button id="myButton">button</button>

//CSS SIDE:

/*
#myDiv{
    width: 1000px;
    height: 1000px;
    background-color: lightblue;
}
*/

