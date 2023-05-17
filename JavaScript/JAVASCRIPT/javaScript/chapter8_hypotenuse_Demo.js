
//FINDING HYPOTENUSE DEMO

/*BASIC VERSION

let c;
let a =window.prompt("Enter a: ");
a = Number(a);
let b = window.prompt("Enter b: ");
b = Number(b);
c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
c=Number(c);
console.log("Hypotenuse = " , c);

*/






// ADVANCED VERSION

/*HTML BODY:


<label id="aLabel">Side A:</label><br>
     <input type="text" id="aInput"><br>

     <label id="bLabel">Side B:</label><br>
     <input type="text" id="bInput"><br>

     <button style="color: red"  type="button" id="myButton">SUBMIT</button><br>

     <label id="cLabel"></label><br>


    <script src="index.js"></script>
    */


    let a;
    let b;
    let c;
    
    document.getElementById("myButton").onclick = function(){
    
        a=document.getElementById("aInput").value;
        a = Number(a);
    
        b = document.getElementById("bInput").value;
        b = Number(b);
        
        c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
    
        document.getElementById("cLabel").innerHTML = "Side C: " + c;
    }
    
    