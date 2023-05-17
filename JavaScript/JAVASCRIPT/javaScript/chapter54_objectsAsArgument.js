class Car{
    constructor(model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Skyline",1997,"blue");
const car2 = new Car("Silvia",1998,"red");
const car3 = new Car("Supra",1999,"white");

changeColor(car1,"black");

displayInfo(car1);

function displayInfo(car){

    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}

function changeColor(car,color){
    car.color = color;
}