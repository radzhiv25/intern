const obj = [
    {pizzas: 5},
    {pizzas: 5},
    {pizzas: 5}
]

function pizza(object){
    let total = 0;
    for(let i = 0; i < object.length; i++){
        total += object[i].pizzas
    }
    console.log(total)
}

pizza(obj)

const obj1 = {
    name: 'rajeev',
    age: 21
}

console.log(Object.values(obj1).length);