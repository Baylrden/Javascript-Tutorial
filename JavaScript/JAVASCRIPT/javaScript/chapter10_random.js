/*let x = Math.floor(Math.random() * 100)+1;
//numbers between 0-100
console.log(x);
*/


//DICE ROLL DEMO

/*HTML BODY:
  <label id="myLabel"></label>
   <button type="button" id="myButton">roll</button>

    <script src="index.js"></script>
    */


    let a;

    document.getElementById("myButton").onclick = function(){
    
        a = Math.floor(Math.random() * 100)+1;
    
    
        document.getElementById("myLabel").innerHTML = a;
    }
    