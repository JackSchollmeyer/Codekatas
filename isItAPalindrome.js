//This function checks if the string is a palindrome

function isPalindrome(x) {
    return (x.toUpperCase().split('').reverse().join('')) == x.toUpperCase() ? true : false;
  }