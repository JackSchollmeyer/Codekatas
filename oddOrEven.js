//This function determines if the sum of the array is odd or even

function oddOrEven(array) {
  let sum = 0;
  array.map((x) => (sum += x));
  return sum % 2 === 0 ? "even" : "odd";
}
