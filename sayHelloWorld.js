//This function will return a string of the 2 arguments seperated by a space

var say = function(string1) {
    return function(string2) {
      return string1 + ' ' + string2
    }
  }