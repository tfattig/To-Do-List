// arguments object no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Trevor',
    cities: ['Dallas', 'New York', 'Kansas City'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

