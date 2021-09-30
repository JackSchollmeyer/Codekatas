//This function takes an array of numbers and moves all the zeros to the end of the array

var moveZeros = function (arr) {
  let a = arr.filter((x) => x !== 0);
  let b = arr.filter((x) => x === 0);
  return a.concat(b);
};
