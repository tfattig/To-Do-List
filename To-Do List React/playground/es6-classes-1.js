

class Person {
    //function defaults
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        //es6 template strings
        return `Hi. I am ${this.name}!`
    }
}

//subclasees
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Traveler('Trevor Paul', 30, 'New York');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

