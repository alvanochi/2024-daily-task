// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

// Write a function "greet" that returns "hello world!"
const greet = () => {
  const hello = ["h", "e", "l", "l", "o"];
  const world = ["w", "o", "r", "l", "d"];
  hello.push(" ");
  world.push("!");
  return hello.concat(world).join("");
};

//daily-task
//day 17 - 366
//https://www.codewars.com/kata/523b4ff7adca849afe000035
