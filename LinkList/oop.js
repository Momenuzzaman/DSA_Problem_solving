class Person {
    constructor(name, age, dob, isMarried) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dob;
        this.isMarried = isMarried;
    }
    updateName(name) {
        this.name = name;
    }
}

const emon = new Person('Emon', 22, 1998, false);
const liton = new Person('Liton', 34, 1984, true);

console.log(emon);
console.log(liton);
