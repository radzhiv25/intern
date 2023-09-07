function check(string){
    if(string[string.length-1] == 'v' || string[string.length-1] == 'V'){
        return true
    }
    else{
        return false
    }
}

// console.log(check('Rajeev'))

// return the index of x

function checkX(string){
    console.log(string.indexOf('x'))

}
// checkX('xavier')

// split the string

function splitX(string){
    const index = string.indexOf('x')
    const a = string.slice(0, index)
    const b = string.slice(index+1)
    const str = (a.length  > b.length) ? a : b
    console.log(str);
}

// splitX('20xdays')

function comp(str1, str2){
    if(str1.length > str2.length){
        console.log(str1)
    }
    else{
        console.log(str2)
    }
}

// console.log(comp('raj','kris'))

function countC(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'c' || str[i] == 'C'){
            sum++
        }
    }
    return sum
}

console.log(countC('CCC ccc'))

function vowels(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            sum++
        }
    }
    return sum
}

// console.log(vowels("Rajeev"))

function reverse(str){
    let newStr = '';
    for(let i = str.length - 1; i >=0; i--){
        // for(let j = i; j < i; j++){
        //     newStr = str[j]
        // }
        newStr += str[i]
    }
    return newStr
}
// console.log(reverse('hey'))

let arr = ['h', 'i']
let str = arr.toString()
// console.log(str)

function palindrome(str){
    let dup = str
    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return (dup === newStr ? true : false)
}

console.log(palindrome('rar'))