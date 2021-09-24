//This function maps through an array and returns a string in binary form of that list of numbers

function fakeBin(x) {
  let list = x.split("");
  return list
    .map((x) => {
      if (x < 5) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
}
