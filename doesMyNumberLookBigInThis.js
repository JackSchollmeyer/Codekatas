//This function will take a number, split it into individual digits, then raise them to the power of the length of the original number
//It then adds the numbers back together and checks if it equal's the original number

function narcissistic(value) {
  let sum = 0;
  value
    .toString()
    .split("")
    .map((x) => (sum += x ** value.toString().length));
  return sum === value;
}
