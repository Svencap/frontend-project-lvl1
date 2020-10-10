// import readlineSync from 'readline-sync';

import randomNum from './randomNumber.js';

import { greeting, rounds } from './engine.js';

const arrOperations = ['+', '-', '*'];

const calculator = (firstNum, operation, secondNum) => {
  let result = '';
  switch (operation) {
    case '+':
      result += firstNum + secondNum;
      break;
    case '-':
      result += firstNum - secondNum;
      break;
    case '*':
      result += firstNum * secondNum;
      break;
    default:
      result = null;
  }
  return result;
};

const getRandomIntInclusive = (min, max) => {
  const minimumNum = Math.ceil(min);
  const maximumNum = Math.floor(max);
  const num = Math.floor(Math.random() * (maximumNum - minimumNum + 1)) + minimumNum;
  return arrOperations[num];
};

const rightTest = () => {
  const min = 1;
  const max = 100;
  const firstNum = randomNum(min, max);
  const secondNum = randomNum(min, max);
  const operation = getRandomIntInclusive(0, 2);
  const question = `${firstNum} ${operation} ${secondNum}`;
  const answer = calculator(firstNum, operation, secondNum);
  return [question, answer];
};

/* const check = (name) => {
  let i = 0;
  while (i < 3) {
    const firstNum = randomNum(1, 100);
    const secondNum = randomNum(1, 100);
    const operation = getRandomIntInclusive(0, 2);
    console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
     */
// if (calculator(firstNum, operation, secondNum) !== answer) {
// console.log(`${answer} is wrong answer ;(. Correct answer was
// ${calculator(firstNum, operation, secondNum)}`);
// return console.log(`Let's try again, ${name}`);
// } if (calculator(firstNum, operation, secondNum) === answer) {
// console.log('Correct!');
// i += 1;
// }
/* }
  return console.log(`Congratulations, ${name}`);
};
 */

const gameCalc = () => {
  const name = greeting('What is the result of the expression?');
  rounds(name, rightTest);
};
export default gameCalc;

/* if (operation === '+') {
  result += firstNum + secondNum;
} if (operation === '-') {
  result += firstNum - secondNum;
} if (operation === '*') {
  result += firstNum * secondNum;
}
return result;
 */
