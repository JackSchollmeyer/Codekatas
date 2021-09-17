//The following function will take 2 strings as arguments and return 1 string with the longer one being inserted in the middle of the shorter string

function solution(a, b){
    return a.length > b.length ? b.substring(0) + a + b.substring(-1) : a.substring(0) + b + a.substring(-1)
  }