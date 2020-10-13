// import readlineSync from 'readline-sync';

import randomNum from './randomNumber.js';

import playGame from './engine.js';

// const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

// const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const getProgressionTerm = (number, step, i) => number + i * step;

const progression = () => {
  let result = '';
  let element;
  const number = randomNum(1, 100);
  const step = randomNum(1, 10);
  const hiddenElement = randomNum(0, 10);
  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenElement) {
      element = `${getProgressionTerm(number, step, i)}`;
      result += ' ..';
    } else {
      result += ` ${getProgressionTerm(number, step, i)}`;
    }
  }
  return [result.trim(), element];
};

/* const checkAnswer = (name) => {
  let z = 0;
  while (z < 3) {
    const arr = progression(); // Прогрессия и нужное число (которое нужно сравнить)
    console.log(`Question: ${arr[0]}`);
    console.log(arr[0]);
    console.log(arr[1]);
    const answer = readlineSync.question('You answer: ');
    if (arr[1] !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${arr[1]}`);
      return console.log(`Let's try again, ${name}`);
    } if (arr[1] === answer) {
      console.log('Correct!');
      z += 1;
    }
  }
  return console.log(`Congratulations, ${name}`);
};
 */

const game = () => {
  const description = 'What number is missing in the progression?';
  playGame(description, progression);
};
export default game;
