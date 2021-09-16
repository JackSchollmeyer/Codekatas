//In this problem I had to show what sound a person would make depending on how high of a floor they jumped off of.
//Then I had to condense the code down to fit a length limit

const sc = f =>
   f > 1 && f < 7 ? 'Aa~ '.repeat(f - 1) + 'Pa! Aa!'
   : f > 6 ? 'Aa~ '.repeat(f - 1) + 'Pa!' 
   : ''