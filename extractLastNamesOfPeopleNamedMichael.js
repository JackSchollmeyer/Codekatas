//This function will take in a string and return an array of the last names of anyone named 'Michael'

function getMichaelLastName(inputText) {
    let arr = [];
    let list = inputText.replace(/[?.,]/g, '').split(' ');
    for (let i = 0; i < list.length; i++) {
      if (list[i - 1] == 'Michael' && /^[A-Z]/.test(list[i])) { arr.push(list[i])}
    }
    return arr  
  }