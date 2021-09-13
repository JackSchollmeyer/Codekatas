//This function will take an array of names and return a string of who likes it.
//If it exceeds 3 names, then it will only log 2 names with the amount of others who also like it.

function likes(names) {
    if (names.length == 0) { return 'no one likes this' }
    else if (names.length == 1) { return names + ' likes this' }
    else if (names.length == 2) { return names[0] + ' and ' + names[1] + ' like this' }
    else if (names.length == 3) { return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this' }
    else if (names.length >= 4) { return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this' }
  }