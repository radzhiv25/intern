// falsy values
// undefined, null, NaN, 0, false, -0, 0n, ""


// truthy values
//  '0', 'false'. {}. []. function(){}

// to check an array is empty

let arr =[]
if(arr.length === 0){
    console.log('Array is empty');
}

let obj = {}

if(Object.keys(obj).length === 0){
    console.log('Object is empty')
}

// Nullish Coalescing Operator (??)
let val1;
// val1 = 3 ?? 4
val1 = null ?? 5
console.log(val1)

// ternary operator
let val2 = 5
val2 > 10 ? console.log('greater'): console.log('smaller');;