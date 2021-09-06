//This function takes two values and returns an array that removes any numbers that exist in both arrays

function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
  }