// import readlineSync from 'readline-sync';

import randomNum from './randomNumber.js';

import playGame from './engine.js';

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
  return Number(result);
};

const getRandomIntInclusive = (startNum, finishNum) => {
  const num = randomNum(startNum, finishNum);
  return arrOperations[num];
};

const testCalc = () => {
  const min = 1;
  const max = 100;
  const firstNum = randomNum(min, max);
  const secondNum = randomNum(min, max);
  const startNum = 0;
  const finishNum = 2;
  const operation = getRandomIntInclusive(startNum, finishNum);
  const question = `${firstNum} ${operation} ${secondNum}`;
  const answer = String(calculator(firstNum, operation, secondNum));
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
  const description = 'What is the result of the expression?';
  playGame(description, testCalc);
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
