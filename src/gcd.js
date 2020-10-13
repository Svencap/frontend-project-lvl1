import randomNum from './randomNumber.js';

import playGame from './engine.js';

const gcd = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  let result = '';
  if (a > b) {
    for (let i = 0; i < a; i += 1) {
      if (a % secondNum === 0 && b % secondNum === 0) {
        result += secondNum;
        return result;
      } secondNum -= 1;
    }
  } if (a < b) {
    for (let z = 0; z < b; z += 1) {
      if (a % firstNum === 0 && b % firstNum === 0) {
        result += firstNum;
        return result;
      } firstNum -= 1;
    }
  }
  return Number(result);
};

const testGcd = () => {
  const min = 1;
  const max = 100;
  const a = randomNum(min, max);
  const b = randomNum(min, max);
  const answer = String(gcd(a, b));
  const question = `${a} ${b}`;
  return [question, answer];
};

/* const checkAnswer = (name) => {
  let i = 0;
  while (i < 3) {
    const a = randomNum();
    const b = randomNum();
    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    if (gcd(a, b) !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd(a, b)}`);
      return console.log(`Let's try again, ${name}`);
    } if (gcd(a, b) === answer) {
      console.log('Correct!');
      i += 1;
    }
  }
  return console.log(`Congratulations, ${name}`);
};
 */

const game = () => {
  const description = 'Find the greatest common divisor of given numbers';
  playGame(description, testGcd);
};
export default game;
