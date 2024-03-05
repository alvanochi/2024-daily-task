// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = (list) => {
  let hasil = list[0];
  for (i = 1; i < list.length; i++) {
    if (list[i] < hasil) {
      hasil = list[i];
    }
  }
  return hasil;
};

const max = (list) => {
  let hasil = list[0];
  for (i = 1; i < list.length; i++) {
    if (list[i] > hasil) {
      hasil = list[i];
    }
  }
  return hasil;
};

console.log(max([4, 6, 1, 8]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// const min = (list) => Math.min(...list); versi cepet
// const max = (list) => Math.max(...list);
// const avg = (list) => list.reduce((a, b) => a + b, 0) / list.length;
// console.log(avg([4, 6, 1, 8]));

//daily-task
//day 35 - 366
//https://www.codewars.com/kata/577a98a6ae28071780000989
