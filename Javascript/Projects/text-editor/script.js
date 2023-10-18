const userInputEl = document.getElementById('userInput')
const showTextBtn = document.getElementById('showTextBtn')
let userText = document.getElementById('userText')
let boldTxtBtn = document.getElementById('bold')
let centTxtBtn = document.getElementById('cent')
let italTxtBtn = document.getElementById('ital')
let redTxtBtn = document.getElementById('red')
let clearBtn = document.getElementById('clear')

// let orgVal = userInputEl.value
let resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', (e) =>{
    // e.preventDefault()
    // text.innerHTML = orgVal
    userText.style.textAlign = 'left'
    userText.style.color = "black"
    userText.style.fontWeight = 'normal'
    userText.style.fontStyle = 'unset'
})

boldTxtBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    // userText.style.fontWeight = 'bold'
    userText.classList.toggle('bold')
})
centTxtBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    // userText.style.textAlign = 'center'
    userText.classList.toggle('cent')
})
italTxtBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    // userText.style.fontStyle = 'italic'
    userText.classList.toggle('ital')
})
redTxtBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    // userText.style.color = 'red'
    userText.classList.toggle('col')
})

// console.log(val.value)
showTextBtn.addEventListener('click', (e) => {
    if(!userInputEl.value){
        alert('Please enter some text')
    }
    userText.innerHTML = userInputEl.value
})

clear.addEventListener('click', (e) => {
    // e.preventDefault()
    userText.innerHTML = ''
})



