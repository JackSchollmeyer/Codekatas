//This code will map through an array of numbers and return each number plus the remainder of that number being divided by the div argument

const solve = (nums, div) => nums.map((x) => x + (x % div));
