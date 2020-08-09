import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const getProgressionTerm = (number, step, i) => number + i * step;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What number is missing in the progression?');
  return name;
};

const progression = () => {
  let result = '';
  let element;
  const number = randomNum();
  const step = getRandomArbitrary(1, 10);
  const hiddenElement = getRandomArbitrary(0, 10);
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

const checkAnswer = (name) => {
  let z = 0;
  while (z < 3) {
    const arr = progression();
    console.log(`Question: ${arr[0]}`);
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

const game = () => {
  const names = greeting();
  checkAnswer(names);
};
export default game;
