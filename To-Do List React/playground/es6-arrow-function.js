function square(x) {
    return x*x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstNameAlt = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstNameAlt('Mike Smith'));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Trevor Paul'));