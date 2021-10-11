//This function checks if every number in an array is a square number

const isSquare = (arr) => {
  let sum = 0;
  arr.map((x) => (sum += Math.sqrt(x)));
  return sum > 0 ? sum % 1 === 0 : undefined;
};
