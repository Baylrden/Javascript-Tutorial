// object = A group of properties and methods
//   properties = what an object has
//   methods = what an object can do
//   use . to access properties/methods.

const car = {
    model:"Skyline",
    color:"black",
    year:1997,


    drive : function(){
        console.log("ssttututuuu");
    },

    brake : function(){
        console.log("stepped on brakes.");
    }
}
console.log(car.model);

car.drive();

