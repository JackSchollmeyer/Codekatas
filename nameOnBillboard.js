//In this function you add 30 to the sum for every character in the string.
//if there are two parameters, then you add the indicated number for each character

function billboard(name, price = 30){
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      if (arguments.length == 1)sum += 30;
      if (arguments.length == 2) sum += arguments[1];
    }
    return sum
  } 