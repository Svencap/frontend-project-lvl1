// import readlineSync from 'readline-sync';

import playGame from './engine.js';

import randomNum from './randomNumber.js';

const isPrime = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  return (counter === 2) ? 'yes' : 'no';
};

const testPrime = () => {
  const min = 1;
  const max = 100;
  const question = randomNum(min, max);
  const answer = isPrime(question);
  return [question, answer];
};
/* const checkAnswer = (name) => {
  let i = 0;
  while (i < 3) {
    const num = randomNum();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(num) !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isPrime(num)}`);
      return console.log(`Let's try again, ${name}`);
    } if (isPrime(num) === answer) {
      console.log('Correct!');
      i += 1;
    }
  }
  return console.log(`Congratulations, ${name}`);
};
*/
const gamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGame(description, testPrime);
};
export default gamePrime;
