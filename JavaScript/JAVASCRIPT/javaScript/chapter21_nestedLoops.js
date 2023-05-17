/*HTML BODY:

<label for="" id="myRectangle"></label>


    <script src="index.js"></script>
    */



//nested loop = a loop inside of another loop

let rows=window.prompt("Enter № of rows");
let columns=window.prompt("Enter № of columns");
let symbol = "$";

for(let i = 1;i<=rows;i++ ){
  
    for(let j = 0;j<=columns;j++){
        document.getElementById("myRectangle").innerHTML +=symbol;
    }

    document.getElementById("myRectangle").innerHTML +="<br>";
}