//This function splits the array into two parts by every other element, then returns the sum of both

function rowWeights(array) {
  let one = 0;
  let two = 0;
  let o = array.filter((x, index) => index % 2 === 0).map((x) => (one += x));
  let t = array.filter((x, index) => index % 2 !== 0).map((x) => (two += x));
  return [one, two];
}
