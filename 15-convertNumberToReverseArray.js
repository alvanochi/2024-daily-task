// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

const digitize = (n) => n.toString().split("").reverse().map(Number);

console.log(digitize(123));

//daily-task
//day 15 - 366
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
