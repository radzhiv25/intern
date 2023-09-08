const user = {
    name: 'Rajeev',
    username: 'radzhiv',
    welcome: function(){
        // console.log(this)
        return `Hey ${this.name} ! How are you?`
    }
}
// using this makes the current context to be reffered
console.log(user.welcome())

user.name = 'Raj'
// console.log(this)
console.log(user.welcome())

const greet = () => {
    return 'Hey'
}

console.log(greet());



// IIFE
// () first is the function definition and the second is the function call
(function yo(){
    // named IIFE
    console.log('IIFE')
})();
// ; is used to end the statement
( (name) => {
    console.log(`Hey ${name}`)
})('Raj')