const areYouPlayingBanjo = (name) =>
  name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("sango"));

//daily-task
//day 21 - 366
//https://www.codewars.com/kata/53af2b8861023f1d88000832
