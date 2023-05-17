
/*HTML BODY:

<h1>Temperature Converter</h1><br>
      <label >Enter Temperature</label><br>
      <input type="text" id="textBox"><br>

     <label for="cRadio" id="cLabel">Celcius</label>
     <input type="radio" id="cRadio" name="unit"><br>

     <label for="fRadio" id="fLabel">Fahrenheit</label>
     <input type="radio" id="fRadio" name="unit"><br>

     <button id="submitBtn">Convert</button>

     <label for="" id="tempLabel"></label>

    <script src="index.js"></script>

    */




    function toCelsius(temp){

        return (temp-32)* (5/9);
        }
    
    
    function toFahrenheit(temp){
    
        return temp*9/5+32;
    }
    
    document.getElementById("submitBtn").onclick = function(){
    
        let temp;
        
        if(celcius.checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp = toCelsius(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°C";
        }
    
        else if(fahrenheit.checked){
            temp = document.getElementById("textBox").value;
            temp = Number(temp);
            temp=toFahrenheit(temp);
            document.getElementById("tempLabel").innerHTML = temp + "°F";
        }
    
        else{
            document.getElementById("tempLabel").innerHTML = "select a unit";
        }
    
    
    }
    
    
    