//This is a two sum function, it will take out the 2 numbers in the array that equals the target value

function twoSum(numbers, target) {
    let sum = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
          sum.push(i);
          sum.push(j);
        }
      }
    }
    return sum
  }