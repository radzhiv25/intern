const num = new Number(200)
// console.log(num);
// console.log(num.toString().length);
// console.log(num.toFixed(3));

const num1 = 123.8966
// console.log(num1.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//  also there are several functions which are present for string which can be checked on chrome console 

// Math has also lot many functions

// Math.random() gives a random number between 0 and 1
let number = Math.random()
console.log(number);

// Math.floor() gives the floor value of the number
let number2 = Math.floor(4.5)
console.log(number2);

// Math.ceil() gives the ceil value of the number
let number3 = Math.ceil(4.5)
console.log(number3);

// Math.round gives the round value of the number
let number4 = Math.round(4.5)
console.log(number4)

// Math.pow() gives the power of the number
let number5 = Math.pow(4,3)
console.log(number5);

console.log(Math.floor(Math.random()* 100));