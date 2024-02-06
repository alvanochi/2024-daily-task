const removeChar = (str) =>
  str
    // .split("")
    .slice(1, str.length - 1); // (1,-1) juga bisa
// .join("");

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));

//daily-task
//day 8-366
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
