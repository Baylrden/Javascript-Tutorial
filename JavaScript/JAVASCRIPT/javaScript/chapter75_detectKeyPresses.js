//window.addEventListener("keydown",event => console.log(event.key));
const myDiv = document.getElementById("myDiv");

window.addEventListener("keydown",move);
let x=0;
let y=0;

function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y+ "px";
            break;
        case "ArrowRight":
          x+=5;
          myDiv.style.left = x+ "px";    
          break;

        case "ArrowUp":
         y-=5;
         myDiv.style.top = y+ "px";    
         break;

         case "ArrowLeft":
            x-=5;
            myDiv.style.left = x+ "px";    
            break;

            default:
                break;


    }

}



//HTML BODY:

//  <div id="myDiv"></div>


//CSS BODY:
/*
#myDiv{
    background-color: blue;
    width: 100px;
    height: 100px;
    border: 2px dashed;
    position: relative;
}
*/