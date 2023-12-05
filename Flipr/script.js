const showDataEl = document.getElementById('show-data')

const newArr = []
fetch('https://api.nobelprize.org/v1/prize.json')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < data.prizes.length; i++){
        if(data.prizes[i].year >= 1900 && data.prizes[i].year <= 2018){
            newArr.push(data.prizes[i])
        }
    }
    console.log(newArr)
})
const newArrSort = newArr.sort((a,b) => a.year - b.year)

console.log(newArrSort)




// async function getNobelPrizeData() {
//     const res = await axios.get('https://api.nobelprize.org/v1/prize.json')
//     const data = res.prizes.year
//     console.log(data)
// }

// for(let i = 0; i < 10; i++){
//     async function prizes(){
//         const res = await axios.get(`https://api.nobelprize.org/v1/prize.json`)
//         let div = document.createElement('div')
//         div.classList.add('prize')
//         div.innerHTML = `
//         <div class="year p-5">${res.data.prizes[i].year}</div>
//         `
//         showDataEl.appendChild(div)
//     }
//     prizes()
// }