/*HTML BODY:
<label id="myLabel">Enter your name</label><br>
<input type="text" id="myText"><br>
<button type="button" id="myButton">submit</button>

    <script src="index.js"></script>
    */

    let userName;

document.getElementById("myButton").onclick = function()
{
    userName = document.getElementById("myText").value;
    console.log(userName);

    document.getElementById("myLabel").innerHTML ="Hello " + userName;
}





//User input. 2 ways:

/* Easy one: window prompt
Difficult : HTML Textbox*/

/*

Windows Prompt:

let userName = window.prompt("What's your name?");
console.log(userName);

*/
