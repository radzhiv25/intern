function hey(){
    console.log('hey')
}
// these are parametes
function add(num1, num2){
    console.log(num1+ num2)
}
// these are arguments
add(2,4)

function newAdd(num1, num2){
    let result = num1 + num2
    return result
}
const result = newAdd(3,5)

console.log(result)

function check(name){
    if(!name){
        return "Please provide name"
    }
    return `Hey ${name}`
}

console.log(check('raj'))

// rest operator 
function numVal(...num){
    return num
}
// an array is given as output
console.log(numVal(1,89,670,5679));

const user = {
    name: 'Rajeev',
    age: 21
}

// here object is being passed in the function
function obj(use){
    return `Hey ${use.name} and your age is ${use.age}`
}
console.log(obj(user))
console.log(obj({name: 'Radzhiv', age : 23}))

// here array is being passed in the function

const arr = [12,3,4,679]

function array(arr){
    return arr
}
console.log(array(arr))
console.log(array([94,67,78]))