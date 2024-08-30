// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

const distinct = a => a.filter((v, i) => a.indexOf(v) === i)

console.log(distinct([1,2,3,4]))
console.log(distinct([1]))
console.log(distinct([1,1,2]))

//daily-task
//day 61 - 366
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118