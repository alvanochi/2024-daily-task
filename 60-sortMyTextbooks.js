// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive
const sorter = textbooks => textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)


console.log(sorter(['Algebra', 'History', 'Geometry', 'English']))
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))

//daily-task
//day 60 - 366
//https://www.codewars.com/kata/5a07e5b7ffe75fd049000051