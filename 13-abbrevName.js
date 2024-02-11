const abbrevName = (name) => {
  const arr = name.split(" ");
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
};

console.log(abbrevName("alvano Hastagina"));
console.log(abbrevName("ALVANO HASTAGINA"));

//daily-task
//day 13 - 366
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
