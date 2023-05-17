/*HTML BODY:
<label id="countLabel">0</label><br>

    <button id="decreaseBtn">decrease</button>
    <button id="resetBtn">reset</button>
    <button id="increaseBtn">increase</button>


    <script src="index.js"></script>
    */



    let count=0;

    document.getElementById("decreaseBtn").onclick = function(){
    
        count-=1;
        document.getElementById("countLabel").innerHTML = count;
    
    }
    
    
    document.getElementById("resetBtn").onclick = function(){
        
        count=0;
        document.getElementById("countLabel").innerHTML = count;
    
    }
    
    
    document.getElementById("increaseBtn").onclick = function(){
        
        count+=1;
        document.getElementById("countLabel").innerHTML = count;
    
    }