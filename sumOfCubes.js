//This function returns the sum of the cubed value of each number from 1 to n

function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }
  return sum;
}
