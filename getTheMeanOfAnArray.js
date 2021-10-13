//This function finds the mean number of a list of test scores

function getAverage(marks) {
  let sum = 0;
  marks.map((x) => (sum += x));
  return Math.floor(sum / marks.length);
}
