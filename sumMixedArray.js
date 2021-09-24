//The following function will sum an array of numbers and strings(of numbers) as if they were all numbers

function sumMix(x) {
  let sum = 0;
  let num = x.map((n) => (sum += Number(n)));
  return sum;
}
