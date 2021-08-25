//This function removes every other element from an array

function removeEveryOther(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i = i+2) {
      newArr.push(arr[i]);
    }
      return newArr;
  }