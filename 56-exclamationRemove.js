// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

const remove = string => `${string.split("!").join("")}!`

console.log(remove("!Hi"))
console.log(remove("!Hi !Hi"))
console.log(remove("Hi!! Hi!"))

//daily-task
//day 56 - 366
//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0