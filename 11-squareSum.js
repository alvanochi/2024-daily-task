const squareSum = (numbers) =>
  numbers.length && numbers.reduce((a, b) => a + b ** 2, 0);

//    const squareSum = (numbers) =>
//    numbers.reduce((a, b) => a + b ** 2, 0); bisa gini juga

//   const squareSum = (numbers) =>
//   numbers.reduce((a, b) => a + b * b, 0); a = accumulator, b = currentValue, 0 = initial value

//daily-task
//day 11 - 366
//https://www.codewars.com/kata/515e271a311df0350d00000f

console.log(squareSum([1, 2, 2]));
console.log(squareSum([]));
console.log(squareSum([-4, -11, 12]));
