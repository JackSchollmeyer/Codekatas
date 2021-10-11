//The following function will take an array of arrays, then merge and sort them into one array

function flattenAndSort(array) {
  return [].concat(...array).sort(function (a, b) {
    return a - b;
  });
}
