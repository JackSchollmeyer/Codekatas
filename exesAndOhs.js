//This function makes sure that there's the same amount of x's as o's in a string

function XO(str) {
  let x = 0;
  let o = 0;
  str.split("").map((i) => {
    if (i === "x" || i === "X") {
      x += 1;
    } else if (i === "o" || i === "O") {
      o += 1;
    }
  });
  return x === o;
}
