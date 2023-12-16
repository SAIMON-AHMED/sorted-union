function uniteUnique(...arr) {

  let array = []
  
  for (let i = 0; i < arr.length; i++) {
    array.push(...arr[i]);
  }
  let uniqueArray = [];
  let flag = false;

  uniqueArray.push(array[0]);
  
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] !== uniqueArray[j]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      uniqueArray.push(array[i]);
    }
  }
  
  return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]
