// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (number) =>
  number % 2 == 1 ? number * 9 : number * 8;

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(5));

//daily-task
//day 32 - 366
//https://www.codewars.com/kata/583710ccaa6717322c000105
