class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Skyline",1997,"blue");
const car2 = new Car("Silvia",1998,"red");
const car3 = new Car("Supra",1999,"white");

const cars = [car1,car2,car3];

function startRace(cars){
    for(const car of cars){
        car.drive();
    }

}

startRace(cars);