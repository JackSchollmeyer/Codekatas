//This function sums all numbers from 0 to n(if n is a whole number greater than 0)

function f(n) {
  if (n % 1 === 0 && n > 0) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  } else {
    return false;
  }
}
