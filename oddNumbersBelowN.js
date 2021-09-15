//This function returns how many positive odd numbers there are below n

function oddCount(n){
    return n % 2 == 0 ? n / 2 : (n - 1) / 2
  }