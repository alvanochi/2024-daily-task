// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const findNeedle = (haystack) => {
  const index = haystack.findIndex((e) => e == "needle");
  return `found the needle at position ${index}`;
};

// const findNeedle = (haystack) => `found the needle at position ${haystack.findIndex((e) => e == "needle")}`;

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

//daily-task
//day 19 - 366
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
