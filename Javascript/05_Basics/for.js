let hero = ['Superman', 'Batman', 'Ironman']

for(let i = 0; i < hero.length; i++){
    console.log(hero[i])
}

for(let index = 1; index <= 10; index++){
    if(index == 5){
        console.log('Detected 5')
        // break keyword
        break
    }
    console.log(`The value is ${index}`)
}

for(let index = 1; index <= 10; index++){
    if(index == 5){
        console.log('Detected 5')
        // continue keyword
        continue
    }
    console.log(`The value is ${index}`)
}
