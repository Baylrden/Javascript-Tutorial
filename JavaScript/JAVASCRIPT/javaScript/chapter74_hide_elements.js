const myButton = document.querySelector("#myButton");
const myIMG = document.querySelector("#myIMG");
  
myButton.addEventListener("click",() => {

    if(myIMG.style.visibility == "hidden"){
        myIMG.style.visibility == "visible";
    }
    else{
        myIMG.style.visibility == "hidden";
    }
})
    

//HTML BODY:

/*
<button id="myButton">toggle</button>
<img id="myIMG" src="skyline.jpg" alt="" style="visibility: hidden;">
<p>press the button.</p>

*/

//CSS BODY:

/*
#myIMG{
    width: 300px;
    display: none;
}
*/


   
      
    
    
