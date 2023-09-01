// there are two ways to declare a string 

let firstName = "Rajeev"

const lastName = new String('Krishna')
// console.log(lastName.length)

// let string = 'Rajeev'
// let len = string.length()
// function check(string){
//     if(string[string.length-1] == 'v' || string[string.length-1] == 'V'){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(check('Rajeev'))

// string interpolation
let fName = 'Rajeev', lName = 'Krishna' , age = 10


let fullName = `My Name is ${fName} ${lName} and my age is ${age}`
console.log(fullName);

// string methods
let gameName = 'NeedForSpeed'

console.log(gameName.charAt(5))
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('e'));
console.log((gameName.substring(3,7)));
console.log(gameName.slice(0,3));
console.log(gameName.fontcolor('red'));

let anotherString = "    Hello"
console.log(anotherString.trim());

const port = 'https://rajeevkrishna.vercel.app'
port.replace('https://','')
console.log(port.replace('https://',''));
