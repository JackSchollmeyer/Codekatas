//This function takes an input and gives the next highest perfect square if the input itself is
//a perfect square. If it's not, then it will return -1

function findNextSquare(sq) {
    let nextSqrt = Math.sqrt(sq) + 1;
    return Math.sqrt(sq) % 1 === 0 ? nextSqrt * nextSqrt : -1;
  }