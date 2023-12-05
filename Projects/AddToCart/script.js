const appSettings = {
    databaseURL: 'https://addtocart-75d08-default-rtdb.firebaseio.com/'
}

const inputFieldEl = document.getElementById('input-item')
const addBtnEl = document.getElementById('add-btn')

addBtnEl.addEventListener('click', () => {
    console.log(inputFieldEl.value)
})