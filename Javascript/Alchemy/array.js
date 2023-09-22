function hasOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      console.log(true);
    }
  }
  console.log(false);
}

// hasOne([1,3,3])
// hasOne([3,5,6])

// sum of even
function sumEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  console.log(sum);
}

// sumEven([1])

function addOne(array) {
  // let newArray = []
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
  console.log(array);
}

// addOne([1,3,4])

function removeOne(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}
// altenative method is to traverse the array from the end

function remove(array, num) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] == num) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}

// removeOne([1,3,4,1] ,1)
// remove([1,3,4,1] ,4)

function half(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(numbers[i] / 2);
  }
  return numbers;
}

// console.log(half([2,3,4,5]))

function sumTwo(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
    //    newArr.push(sum)
  }
  return newArr;
}

// console.log(sumTwo([1,2,3],[2,3,4]))

// key and value pair
function checkKey(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return obj;
}

// console.log(checkKey['r','a','j','e','e','v'])

function objPush() {
  let obj = {};
  obj.push({ name: "rajeev" });
  console.log(obj);
}

// objPush()

function playerHandScore(hand) {
  let sum = 0;
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == "K") {
      sum += 4;
    } else if (hand[i] == "Q") {
      sum += 3;
    } else {
      sum += 2;
    }
  }
  return sum;
}

console.log(playerHandScore('KQJ'));