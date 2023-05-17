//function = Define code once, and use it many times.
//To perform some code, call the function name.


callReinforcements();

function callReinforcements(){

    let colorOfTank = window.prompt("Enter your tank's color.");

    Pz6Tiger(colorOfTank);
}


function Pz6Tiger(colorOfTank){

    console.log("You called a" , colorOfTank , "Tiger I tank!");

}

//NOTE: YOU DO NOT HAVE TO DECLARE VARIABLE
// FOR FUNCTION PARAMETERS.