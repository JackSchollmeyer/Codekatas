//This function takes in a string and returns the amount of vowels that are in that string

function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
      for (let char of str) {
        if (vowels.includes(char)) {
          vowelsCount++
      };
    }
    return vowelsCount;
  }