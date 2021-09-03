//This function takes a string and reverses the words as well as the individual letters within that string

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
   }