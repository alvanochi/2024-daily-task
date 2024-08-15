// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output


const solution = (a, b) => a.length < b.length ? a + b + a : b + a + b

console.log(solution("hello", "hi"));
console.log(solution('13', '200'));
console.log(solution('U', 'False'));

//daily-task
//day 53 - 366
//https://www.codewars.com/kata/50654ddff44f800200000007