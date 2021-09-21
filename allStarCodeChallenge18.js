//This function finds how many times the inputed letter appears in the string

function strCount(str, letter){  
    return str.split('').filter(l => l == letter).join('').length
  }