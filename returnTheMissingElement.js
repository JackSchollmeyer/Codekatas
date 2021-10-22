//This function returns the missing number from an array which should consist of digits 0-9

function getMissingElement(sia) {
  let sum = 0;
  sia.map((x) => (sum += x));
  return 45 - sum;
}
