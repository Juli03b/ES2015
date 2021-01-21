//max num with arrow functions
const maxNum = [99, 2303, 293, 649, 9000, 98382].reduce((max, num) => Math.max(max, num))
const double = (arr) => arr.map((num) => num * 2)
const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((num) => num % 2 === 0);
