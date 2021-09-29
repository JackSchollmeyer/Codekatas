//This function calculates the difference between the current age and the given year and returns a string that corresponds

function calculateAge(b, c) {
  let sum = c - b;
  return sum > 1
    ? "You are " + sum + " years old."
    : sum === 1
    ? "You are 1 year old."
    : sum === 0
    ? "You were born this very year!"
    : sum === -1
    ? "You will be born in 1 year."
    : "You will be born in " + sum * -1 + " years.";
}
