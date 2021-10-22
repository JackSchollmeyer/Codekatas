//This function takes a number and returns it in an array in reversed order

function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));
}
