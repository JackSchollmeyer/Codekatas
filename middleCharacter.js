//Here the function returns a string with only the middle character of that string
//(or 2 characters if the string is an even number)

function getMiddle(s){
    let position;
    let length;
     if (s.length % 2 === 1) {
       position = s.length / 2;
       length = 1;
     } else {
       position = s.length / 2 - 1;
       length = 2;
     }
     return s.substring(position, position + length)
   }