//The given function will return the highest and lowest variables within a given list of numbers

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers)
  }