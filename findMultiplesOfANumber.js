//This function takes a number and keeps adding that number to itself until it reaches the limit.
//It then returns an array of the numbers

function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}
