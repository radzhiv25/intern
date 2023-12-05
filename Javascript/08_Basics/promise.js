const promiseOne = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Async task one')
        resolve()
    },2000)
})
promiseOne.then(() => {
    console.log('Promise one resolved')
})