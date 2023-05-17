//nested functions = Functions inside other functions.
//   Outer functions have acces to inner functions.
//   Inner functions are "hidden" from outside the outer function.
//   used in closures (future video topic)


let userName = "Dude";
let userInbox=0;

login();
function login(){

    displayUserName();
    displayUserInbox();



    function displayUserName(){

        console.log("hola" , userName);
    }
    
    function displayUserInbox(){
        console.log("inbox messages:" , userInbox);
    
    } 
}




