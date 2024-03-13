// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

const century = (year) => Math.ceil(year / 100);

console.log(century(1901));

//daily-task
//day 42 - 366
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
