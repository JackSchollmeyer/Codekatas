//This function squares every individual digit in a number and merges the resulting numbers together

function squareDigits(num){
    let n = num.toString().split('').map(x => x * x).join('')
    return Number(n)
  }