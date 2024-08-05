// Be Concise IV - Index of an element in an array
// Task
// Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.

const find = (arr, e) => arr.indexOf(e) !== -1 ? arr.indexOf(e) : "Not found"
let array = [2,3,5,7,11];

  console.log(find(array, 2))

//daily-task
//day 49 - 366
//https://www.codewars.com/kata/5703c093022cd1aae90012c9
