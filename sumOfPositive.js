//this function takes in an array of numbers and returns
//the sum of all the positive numbers

function positiveSum(arr) {
    let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
          sum += arr[i];
        }
      }
    return sum;
  }