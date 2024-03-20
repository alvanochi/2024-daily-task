// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (!input || input == 0) {
    return [];
  } else {
    const positive = input.filter((e) => e > 0).length;
    const negative = input
      .filter((e) => e < 0)
      .reduce((prev, curr) => prev + curr, 0);
    return [positive, negative];
  }
}

console.log(countPositivesSumNegatives([-11, -12, -13, -14, -15, 2]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives());

//daily-task
//day 44 - 366
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
