// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

const doubleChar = (str) => str.split("").map((e) => e.repeat(2)).join("")

console.log(doubleChar("adidas"))

//daily-task
//day 52 - 366
//https://www.codewars.com/kata/56b1f01c247c01db92000076