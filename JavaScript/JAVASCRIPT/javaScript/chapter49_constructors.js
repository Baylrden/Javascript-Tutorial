// constructor = special method of a class,
//   accepts arguments and assigns properties.

class Student{
    constructor(name,age,gpa){

        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student("Dude",20,3.3);

console.log(student1.gpa);

student1.study();