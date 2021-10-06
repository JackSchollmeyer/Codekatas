//This function takes two numbers and returns the sum of all the numbers that come between them.
//Including the larger number and not including the smaller number

function cubeSum(n, m) {
  let sum = 0;
  if (n < m) {
    for (let i = n + 1; i <= m; i++) {
      sum += i * i * i;
    }
  } else {
    for (let i = m + 1; i <= n; i++) {
      sum += i * i * i;
    }
  }
  return sum;
}
