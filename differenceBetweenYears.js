//This function calculates the difference between years

var howManyYears = function (date1, date2) {
  let a = date1.slice(0, 4);
  let b = date2.slice(0, 4);
  return a > b ? a - b : b - a;
};
