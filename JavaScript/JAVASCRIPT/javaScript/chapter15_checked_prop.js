
/*HTML BODY:

 <label for="myCheckbox">subscribe</label>
   <input type="checkbox" id="myCheckbox"><br>

   <button id="myButton">submit</button>



   <label for="visaBtn">Visa</label>
   <input type="radio" name = "card" id="visaBtn"><br>

   <label for="mastercardBtn">MasterCard</label>
   <input type="radio" name = "card" id="mastercardBtn"><br>

   <label for="paypalBtn">PayPal</label>
   <input type="radio" name = "card" id="paypalBtn"><br>


    <script src="index.js"></script>
    */



    document.getElementById("myButton").onclick = function(){

        const myCheckbox = document.getElementById("myCheckbox");
    
        const visaBtn = document.getElementById("visaBtn");
        const mastercardBtn = document.getElementById("mastercardBtn");
        const paypalBtn = document.getElementById("paypalBtn");
    
        if(myCheckbox.checked)
    
        console.log("you are subscribed.");
    
        else{
            console.log("you are not subscribed.");
        }
    
        if(visaBtn.checked){
    
        
            console.log("You are paying with a Visa.");
        }
    
        else if(mastercardBtn.checked){
            console.log("You are paying with a MasterCard.");
        }
    
        else{
            console.log("You are paying with a PayPal.");
        }
    
    }