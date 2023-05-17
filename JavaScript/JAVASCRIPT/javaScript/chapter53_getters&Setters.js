// get = binds an object property to a function
//   when that property is accessed.

// set = binds an object property to a function
//   when that property is assigned to a value


class Car{
    constructor(power){
        this._gas=25;
        this._power = power;
    }

    get power(){
        return `${this._power} hp`;
    }

    get gas(){
        return `${this._gas}L`;
    }

    set gas(value){
        this._gas=value;
    }
}

let car = new Car(400);
car.gas=35;
console.log(car.gas);
console.log(car.power);