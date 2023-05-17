const mybutton = document.getElementById("myButton");

const myAnimation = document.getElementById("myDiv");


mybutton.addEventListener("click",beginCallback);

function beginCallback(){
    let timerId = null;
    let degrees = 0;
    let x=0;
    let y=0;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame,5);

    function frame(){

        if(x>=200 || y>=200 & degrees>=360 & scaleX>=2){
            clearInterval(timerId);
        }
        else{
          degrees+=5;
          myAnimation.style.transform = "rotateZ("+degrees+"deg)";
          //there is ROTATE X,Y and Z.

          x+=1;
          y+=1;
          myAnimation.style.top = x+ "px";
          myAnimation.style.left = y+"px";

          scaleX+=0.01;
          scaleY+=0.02;
          myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}




//HTML BODY:

/*
 <button id="myButton">begin</button>
  <div id="myDiv"></div>
*/

  //CSS BODY:

  /*
  #myDiv{
    background-color: purple;
    width: 100px;
    height: 100px;
    position: relative;

}
*/