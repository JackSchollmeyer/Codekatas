//This function checks if a number start with one of the three listed numbers

function validateCode (code) {
    return code.toString().startsWith(1) || code.toString().startsWith(2) || code.toString().startsWith(3)  ? true : false
  }