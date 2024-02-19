// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = (array) =>
  array.length && [...array].reduce((acc, curr) => acc + curr) / array.length;

console.log(findAverage([1, 1, 1]));
console.log(findAverage([9, 2, 4]));
console.log(findAverage([]));

//daily-task
//day 22 - 366
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
