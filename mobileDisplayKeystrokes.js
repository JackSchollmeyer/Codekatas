//This function gives the amount of clicks it would take to write a given string on a traditional phone keypad

function mobileKeyboard(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == 1 ||
      str[i] == 2 ||
      str[i] == 3 ||
      str[i] == 4 ||
      str[i] == 5 ||
      str[i] == 6 ||
      str[i] == 7 ||
      str[i] == 8 ||
      str[i] == 9 ||
      str[i] == 0 ||
      str[i] == "*" ||
      str[i] == "#"
    ) {
      sum += 1;
    } else if (
      str[i] == "a" ||
      str[i] == "d" ||
      str[i] == "g" ||
      str[i] == "j" ||
      str[i] == "m" ||
      str[i] == "p" ||
      str[i] == "t" ||
      str[i] == "w"
    ) {
      sum += 2;
    } else if (
      str[i] == "b" ||
      str[i] == "e" ||
      str[i] == "h" ||
      str[i] == "k" ||
      str[i] == "n" ||
      str[i] == "q" ||
      str[i] == "u" ||
      str[i] == "x"
    ) {
      sum += 3;
    } else if (
      str[i] == "c" ||
      str[i] == "f" ||
      str[i] == "i" ||
      str[i] == "l" ||
      str[i] == "o" ||
      str[i] == "r" ||
      str[i] == "v" ||
      str[i] == "y"
    ) {
      sum += 4;
    } else if (str[i] == "s" || str[i] == "z") {
      sum += 5;
    }
  }
  return sum;
}
