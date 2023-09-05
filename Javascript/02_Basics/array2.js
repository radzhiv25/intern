const marvelHeros =['IronMan', 'Thor', 'Hulk']
const dcHeros = ['Superman', 'Batman', 'Aquaman']

// const heros = marvelHeros.concat(dcHeros)
// const hero = marvelHeros.push(dcHeros)
// console.log(heros);
// console.log(hero)

// concat method 
console.log(marvelHeros.concat(dcHeros));
// spread operator
const newHero = [...marvelHeros, ...dcHeros]
console.log(newHero);

// convert multi dimensional array to single dimensional array
const array2 = [1,2,3,[4,5], [6,[7,8]]]
console.log(array2.flat(3))

// convert string to array
console.log(Array.from('rajeev'))

const score1 = 100;
const score2 = 200;
const score3 = 300;

// create array from variables
console.log(Array.of(score1, score2, score3))