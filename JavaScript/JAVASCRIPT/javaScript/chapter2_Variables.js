
//HTML BODY:

/*
p id="p1"></p>
<p id="p2"></p>
<p id="p3"></p>

    <script src="index.js"></script>
    */




var firstName = "Bro";
var age = 22;
let student =  true;


console.log("Hello , " ,firstName);
console.log("You are :" , age);
console.log("Student ? :" , student);

document.getElementById("p1").innerHTML = "Hello  " + firstName;
document.getElementById("p2").innerHTML = "You are  " + age + "  Years old";
document.getElementById("p3").innerHTML = "Enrolled:  " + student;