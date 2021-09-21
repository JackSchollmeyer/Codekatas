//This fuction reverses the case of all vowels in a given string

function swapVowelCase(str) {
    return str.split('').map(x => {
      return x == 'a' ? 'A' : x == 'A' ? 'a' : x == 'e' ? 'E' : x == 'E' ? 'e' : x == 'i' ? 'I' : x == 'I' ? 'i' :
      x == 'o' ? 'O' : x == 'O' ? 'o' : x == 'u' ? 'U' : x == 'U' ? 'u' : x
    }).join('')
  }