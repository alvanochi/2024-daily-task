// Terminal Game - Create Hero Prototype
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0


class Hero {
    constructor(name){
        this.name = name || 'Hero'
        this.position = '00'
        this.health = 100
        this.damage = 5
        this.experience = 0
    }
  }

console.log(new Hero().name)
console.log(new Hero().health)
console.log(new Hero('Alvan').name)

//daily-task
//day 57 - 366
//https://www.codewars.com/kata/55e8aba23d399a59500000ce