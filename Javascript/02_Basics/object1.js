// object literals
// Object.create 


const mySym = Symbol('Key1')

let user = {
    // name is considered as a key and Rajeev is considered as a value
    name: 'Rajeev',
    "Last name" : "Krishna",
    age: 21,
    [mySym]: 'Value for this',
    city: 'Indore',
    email: 'radzhivkrishna@gmail.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday','Thursday']
}

console.log(user.name);
console.log(user['city']);
console.log(typeof user[mySym]);

// this is used to freeze the object from any further updation
// Object.freeze(user)
user.name = 'radzhiv'
console.log(user.name)
console.log(user)

user.greeting = function(){
    console.log('hey user');
}

console.log(user.greeting())

user.greetings = function(){
    console.log(`Hey, ${this.name}. Welcome to our website`)
}
console.log(user.greetings());

