// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) =>
  arr.filter((e) => e > 0).reduce((a, b) => a + b, 0);

console.log(positiveSum([1, -2, 3, 4, 5]));

//daily-task
//day 41 - 366
//https://www.codewars.com/kata/5715eaedb436cf5606000381
