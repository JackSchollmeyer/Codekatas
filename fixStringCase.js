//This function analyzes if there are more uppercase or lowercase letters in a string, then changes all letters to the case that occurs more.

function solve(s) {
  let l = 0;
  let u = 0;
  s.split("").map((x) => {
    if (x.match(/[a-z]/)) {
      l += 1;
    } else {
      u += 1;
    }
  });
  return l >= u ? s.toLowerCase() : s.toUpperCase();
}
