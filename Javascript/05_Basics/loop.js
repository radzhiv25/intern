const arr = [1,2,3,4,5,6]
// for-of loop
for (const num of arr) {
    // console.log(num)
}

for (const num of arr){
    if(num == 3){
        console.log('Detected 3')
        // break
        continue
    }
    // console.log(num)
}

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('CA', 'Canada')
map.set('FR', 'France')

console.log(map);
// this is only done for maps
for (const [val, country] of map) {
    // console.log(`The country is ${country} and the value is ${val}`)
}

const myObj = {
    game1 : 'Need for Speed',
    game2 : 'GTA'
}
//  for-in loop
for (const key in myObj) {
    // this will print keys
    // console.log(key)
    // this will print the values
    // console.log(myObj[key]); 
}

// for-in for arrays
const extension = ['js','html','css', 'py', 'java']

for(const prog in extension){
    // console.log(`The indice ${prog} and the value of indice is ${extension[prog]}`)
}

extension.forEach( (prog) =>{
    prog = prog.toUpperCase()
    console.log(prog)
})

const myCode = [
    {
        lang: 'Javascript',
        langExt: 'js'
    },
    {
        lang: 'Java',
        langExt: 'java'
    },
    {
        lang: 'Python',
        langExt: 'py'
    }
]

myCode.forEach((item) => {
    console.log(item.lang)
})

// filter 
const arr1 = [1,2,3,4,5,6,7,8,9,10]

const newArr = arr1.filter((item) => {
    return item > 4
})

console.log(newArr);

// chained map and filter

const arrChain = [1,2,3,4,5]

const chain = arrChain 
.map((item) => item * 5)
.map((item) => item + 10)
.filter((item) => item >= 25)

console.log(chain);


// reduce method

const arrReduce = [1,2,3,4]

const sumRed = arrReduce.reduce((acc, item) => {
    return acc + item
}, 0)
// acc is accumulator and it adds the value of item to it

console.log(sumRed);