//This function sums all the even numbers together and all the odd together, then checks which is greater

function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  str.split("").map((x) => {
    if ((x * 1) % 2 === 0) {
      even += x * 1;
    } else {
      odd += x * 1;
    }
  });
  return even > odd
    ? "Even is greater than Odd"
    : odd > even
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}
