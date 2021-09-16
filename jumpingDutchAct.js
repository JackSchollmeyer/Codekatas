//In this problem I had to solve a problem that showed what sound a person would make deping on how high of a floor they jumped off of.
//Then I had to condense the code down to fit a limit on how long the code could be

const sc = f =>
   f > 1 && f < 7 ? 'Aa~ '.repeat(f - 1) + 'Pa! Aa!'
   : f > 6 ? 'Aa~ '.repeat(f - 1) + 'Pa!' 
   : ''