//This function looks at an array of booleans, if true then add 1, if false then add 0

function countSheeps(arrayOfSheep) {
    let result = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        result += 1
      } else {
        result += 0
      }
    }
    return result;
  }