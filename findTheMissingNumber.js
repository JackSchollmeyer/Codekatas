//This function finds what number is missing in an array that's supposed to be from 1-100

function missingNo(nums) {
  let sum = 0;
  nums.map((x) => (sum += x));
  return 5050 - sum;
}
