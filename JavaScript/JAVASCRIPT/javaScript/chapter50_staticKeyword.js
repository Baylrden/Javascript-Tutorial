// static = belongs to the class, not the objects
//   properties: useful for caches,fixed-configuration 
//   methods: useful for utility functions


class Car{

    static numberOfCars=0;
    constructor(model){
        this.model = model;
        Car.numberOfCars++;
    }

    static startRace(){
        console.log("3..2..1..GO!");
    }

}

const car1 = new Car("Silvia");
const car2 = new Car("RX-7");
const car3 = new Car("350Z");

console.log(Car.numberOfCars);

Car.startRace();