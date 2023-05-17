//  this = reference to a particular object
//  the object depends on the immediate context.
const car = {
    model:"Skyline",
    color:"black",
    year:1997,

    drive : function(){
        console.log("ssttututuuu");
    },

    brake : function(){
        console.log(`stepped on brakes in ${this.model}` );
    }
}


const car2 = {
    model:"Supra",
    color:"white",
    year:1998,

    drive : function(){
        console.log("ssttututuuu");
    },

    brake : function(){
        console.log(`stepped on brakes in ${this.model}`);
    }
}

car.brake();
car2.brake();