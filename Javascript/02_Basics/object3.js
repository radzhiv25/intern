const course = {
    name: 'Javascript',
    price: 1000,
    instructor: 'Rajeev'
}

// object destructuring
const {instructor: inst} = course 

console.log(inst)