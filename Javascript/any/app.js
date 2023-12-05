// alert('Hello World')

let learning = true;

if(learning){
    console.log('Learning Javascript')
}

let welcome = 'Welcome to Js'
console.log(typeof(welcome))


// object jn js
let info = {
    firstName: "Rajeev",
    'last name': 'Krishna',
    phone: 6262532002,
    mail: 'radzhivkrishna@gmail.com',
    address: {
        city: 'Indore',
        state: 'MP',
        country: 'India',
        pincode: 452010,
    } 
}
info.firstName = "Javascript"
// this deletes the mail property from the object
delete info. mail;

console.log(info)
console.log(info.phone)
console.log(info.address.state)
console.log(info['last name'])
console.log('mail' in info)

let e = parseInt('1111',2);
console.log(e); 

let numbers = [1,2,3,4,5,6]
numbers.push(7)
console.log(numbers);
numbers.unshift(0);
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.pop()
console.log(numbers)
console.log(numbers.length)
console.log(numbers.indexOf(4))
console.log(Array.isArray(numbers))

let cost = {
    valueOf() {
      return 100;
    },
  };
  
  let currentCost = cost - 10;
  console.log(currentCost);
  
  currentCost = cost + 100;
  console.log(currentCost);
  
  currentCost = cost / 2;
  console.log(currentCost);
  
  currentCost = cost * 1.5;
  console.log(currentCost);
  
let num = [1,2,3,4,5,6]
let color = ['red', 'green', 'blue', 'yellow', 'orange']

let arr = [
    ...color,
    ...num
]
console.log(arr)

function showUp(){
    document.getElementById('accordion-pop').style.display = 'hidden'
}