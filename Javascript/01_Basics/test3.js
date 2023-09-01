let na = true 
console.log(Number(na))

const name1 = ""
console.log(Boolean(name1));

let someNumber = 35
console.log(String(someNumber));

// datatypes
const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

// using symbol this makes the value a unique value 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 4801809480918409818n
console.log(typeof bigNumber);

// arrays
const heros =['Superman', 'Batman', 'Aquaman']

// object
const info = {
    name: 'Rajeev',
    age: 21
}

// function
const func = function(){
    console.log();
}
// object function
console.log(typeof func);

// stack memory
let value = 'hey js'
let anotherValue = value
anotherValue = 'hey python'
console.log(value, anotherValue);

// heap memory
let obj1 = {
    name: 'Javascript', 
    age: 20
}
let obj2 = obj1

obj1.name = 'java'
console.log(obj1, obj2)