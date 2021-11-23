//This function calculates how long it will take to boiled x amopunt of eggs
//you can only boil 8 at a time and they take 5 minutes to boil

const cookingTime = (eggs) => {
  return Math.ceil(eggs / 8) * 5;
};
