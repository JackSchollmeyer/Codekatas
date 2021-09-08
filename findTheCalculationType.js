//This function calculates two arguments and returns the string of what kind of operation it used

function calcType(a, b, res) {
    return a + b === res ? 'addition'
         : a - b === res ? 'subtraction'
         : a * b === res ? 'multiplication'
         : 'division'
   }