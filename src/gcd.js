import randomNum from './randomNumber.js';

import playGame from './engine.js';

const gcd = (m, n) => {
  let i = m;
  while (m % i !== 0 || n % i !== 0) {
    i -= 1;
  }
  return i;
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
