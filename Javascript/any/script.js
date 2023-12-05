// const call = document.getElementsByTagName("button").addEventListener("click", counter)

function counter(){
    let count = 0
    count++
    
    console.log("button clicked " + count )
}
counter(1)

function change(){
    document.getElementById('demo').innerHTML = 'Changed'
}
function revert(){
    document.getElementById('demo').innerText = "Hey this is Rajeev"
}

// const val = document.getElementById('text').value
// console.log(val)

function enter(){
    const val1 = document.getElementById('val1').value
    const val2 = document.getElementById('val2').value
    document.getElementById('name').innerHTML = Number(val1) + Number(val2)
}
const y = document.getElementById('demo')
y.addEventListener('mouseover' ,show)
function show(){
    document.getElementById('demo').innerHTML += "Mouse hovered <br>"
}

setInterval(time, 500)
// const time = document.getElementById('demo')
function time(){
    document.getElementById('demo').innerHTML = "timeout function"
}

setInterval(change, 300)

function change(){
    document.getElementById('change').innerHTML = "Interval"
}

const hello = () => {
    // alert("Hello");
    document.getElementById('clr').style.color = 'gray'
}

const p = document.getElementById('message')
console.log(p)