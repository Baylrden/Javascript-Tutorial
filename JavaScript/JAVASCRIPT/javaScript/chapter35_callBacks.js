// callback = a function passed as an argument
//      to another function


/* HTML BODY:

<label for="" id="myLabel"></label>

    <script src="index.js"></script>
    */
   
    sum(2,3,displayConsole);

    function sum(x,y,callback){
        callback(x+y);
    }
    
    function displayConsole(output){
        console.log(output);
    }
    
    function displayDOM(output){
        document.getElementById("myLabel").innerHTML = output;
    }



//EX:2

   function add(x,y){
    return x+y;
   }

   function multiple(x,y){
    return x*y;
   }

   function calculate(x,y,callBack_or_Operator){
    return callBack_or_Operator(x,y);
   }

   console.log("Result:" , calculate(3,4,multiple));