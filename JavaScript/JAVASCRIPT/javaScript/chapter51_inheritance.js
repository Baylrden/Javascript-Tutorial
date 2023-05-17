//inheritance = a child class can inherit all the
//    methods and properties from another class

class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }

}




class Rabbit extends Animal{
    
    name = "rabbit";

    run(){
        console.log(`${this.name} is running`);
    }
}


class Fish extends Animal{
    
    name = "fish";

    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    alive = true;
    name = "hawk";

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
hawk.eat();
