const todoItems = document.getElementById('todo-items')

let todos = []

let titleEl = document.getElementById('title')
let descEl = document.getElementById('desc')

let addBtn = document.getElementById('add')
let deteteBtn = document.getElementById('delete')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(e)
    let todo = {
        title: titleEl.value,
        desc: descEl.value
    }
    todos.push(todo)
    // let titleStr = JSON.stringify(titleVal.value)
    // console.log(titleVal.value) 
    //  let descStr = JSON.stringify(descVal.value)
    //  console.log(titleStr) 
    //  console.log(descVal.value)
    let li = document.createElement('li')
    li.innerHTML = `
    <div class="my-3 border p-2 md:w-2/3 mx-auto rounded" id="">
    <h2 class="font-bold border-b">${todo.title}</h2>
    <p>${todo.desc}</p>
    <button id='del' class="p-1 bg-red-500 rounded text-white">delete</button>
    </div>`
    todoItems.appendChild(li)
    console.log(todos)
})

deteteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(e)
    // todos.pop()
    todoItems.removeChild(todoItems.lastChild)
    todoItems.pop()
})
