// for simgletons object
// const user = new Object()

const appUser = {}

appUser.name = 'Rajeev'
appUser.age = 21
appUser.username = 'radzhiv'
appUser.isLoggedIn = true

console.log(appUser);

const regularUser = {
    email: 'radzhivkrishna@gmail.com',
    fullName: {
        firstName: 'Rajeev',
        lastName: 'Krishna'
    }
}

// combining several objects into one

const obj1 = { 1: 'a', 2: 'b'}
const obj2 = { 3: 'c', 2: 'd'}
const obj3 = { 5: 'e', 6: 'f'}

const obj4 = Object.assign({},obj1, obj2, obj3)
console.log(obj4);

console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.entries(appUser))
console.log(appUser.hasOwnProperty('city'))
console.log(appUser.hasOwnProperty('name'))