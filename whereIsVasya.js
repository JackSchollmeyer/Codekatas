//This function calculates the amount of possible positions in a line vasya could be standing
//There cannot be any less than 'bef' in front of him and any more than 'aft' behind him

function whereIsHe( p, bef, aft ){
    return p - bef <= aft ? p - bef : aft + 1
  }