//This function checks for prime numbers and returns a boolean

function isPrime(n) {
    for (let i = 3; i < n; i++) 
      if(n % i == 0) return false;
        return n > 1
  }