var nameVar = 'Trevor';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

//Can't redefine let based variables
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//Can't redefine or reassign cost based variables.
const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block level scoping - const and let are block level scoped and not function level scoped.
const fullName = 'Trevor Paul';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);