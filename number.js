/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
let firstNum = Math.floor(Math.random() * 15);
let secondNum = Math.floor(Math.random() * 15);
let result = [firstNum, secondNum];
let finalResult = [firstNum, secondNum];
let sum = 0;
for (let index = 0; index <= 10; index++) {
  sum = result.reduce((a, b) => a + b) * 2;
  result.push(sum);
  result.shift();
  finalResult.push(sum);
}
console.log(finalResult);
