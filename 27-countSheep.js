// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
}

console.log(countSheep(3));

//daily-task
//day 27 - 366
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
