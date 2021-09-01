//For this function to return true, one flower needs to have an even number
//of pedals and the other an odd amount. If both have odd or both have even,
//then it returns false.

function lovefunc(flower1, flower2){
    return flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0 ? false : true
  }