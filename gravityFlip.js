//This constant checks how many box's will be in each column after flipping the container to a side

const flip=(d, a)=>{ 
    return d == 'R' ? a.sort(function(a, b) {return a - b})
    : a.sort(function(a, b) {return b - a})
  }