const val = document.getElementById('val')
const textVal = document.getElementById('textVal')
let text = document.getElementById('text')
let boldTxt = document.getElementById('bold')
let centTxt = document.getElementById('cent')
let italTxt = document.getElementById('ital')
let redTxt = document.getElementById('red')
let clear = document.getElementById('clear')

let orgVal = val.value
let resetVal = document.getElementById('reset')

resetVal.addEventListener('click', (e) =>{
    // e.preventDefault()
    text.innerHTML = orgVal
})

boldTxt.addEventListener('click', (e) => {
    // e.preventDefault()
    text.style.fontWeight = 'bold'
})
centTxt.addEventListener('click', (e) => {
    // e.preventDefault()
    text.style.textAlign = 'center'
})
italTxt.addEventListener('click', (e) => {
    // e.preventDefault()
    text.style.fontStyle = 'italic'
})
redTxt.addEventListener('click', (e) => {
    // e.preventDefault()
    text.style.color = 'red'
})

// console.log(val.value)
textVal.addEventListener('click', (e) => {
    // e.preventDefault()
    // console.log(val.value)
    text.innerHTML = val.value
})

clear.addEventListener('click', (e) => {
    // e.preventDefault()
    text.innerHTML = ''
})

