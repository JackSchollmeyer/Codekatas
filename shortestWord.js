//The following function will return the length of the shortest word in a string

function findShort(s){
    return Math.min(...s.split(' ').map(x => x.length))
   }