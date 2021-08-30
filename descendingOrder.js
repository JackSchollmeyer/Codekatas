//The given number will be returned in descending order

function descendingOrder(n){
    let result = n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('');
    return parseInt(result)
  }