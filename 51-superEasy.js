// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

const problem = (x) => typeof(x) === "number" ? x * 50 + 6 : "Error";

console.log(problem(1));
console.log(problem("9"));
console.log(problem());

//daily-task
//day 51 - 366
//https://www.codewars.com/kata/55a5bfaa756cfede78000026