// setTimeout() = invokes a function after a number of milliseconds
//   asynchronous function (doesn't pause execution)


//HTML BODY:
//<button id="myButton">Buy</button>


let item = "cryptocurrency";
let price = 420.69;


let timer1 = setTimeout(firstMessage,3000,item,price);
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000);


function firstMessage(item,price){
    alert(`Buy this crypto currency for $${price}!`)
}

function secondMessage(){
    alert(`You don't want?!`)
}

function thirdMessage(){
    alert(`DO IT! NOW!`)
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying hehe siiuu`);
}