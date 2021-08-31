//This function takes an input and sums every number that comes between
//the given number and 1, including 1 and the given number

var summation = function (num) {
    let sum = 1;
    let number = 1;
      while(number < num) {
       number++;
       sum += number;
      }
      return sum
  }