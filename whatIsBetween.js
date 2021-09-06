//This function takes two values and returns an array of all the numbers that  come
//between those two values, including the inputs


function between(a, b) {
    let sum = []
    for(let i = a; i <= b; i++) {
      sum.push(i)
    }
    return sum
  }