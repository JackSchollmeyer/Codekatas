//This function finds all the factors of a given number and returns an array of them

function factors(x) {
  let result = [];
  for (let i = x; i > 0; i--) {
    if (x % i === 0) {
      result.push(i);
    }
  }
  return result.length > 1 ? result : -1;
}
