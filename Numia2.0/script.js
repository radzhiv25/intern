alert("Welcome to Pixus");

const hello = prompt("Enter your name: ");
const hey = document.getElementById("hey");

function greet(hello){
    hey.innerHTML = "Welcome" + " " + hello + " " + "🚀" 
}
greet(hello)
