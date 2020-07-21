import readlineSync from 'readline-sync';

const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const isEven = (number) => number % 2 === 0;

const trueOrFalse = (randomNumber) => {
  let trueAnswer = '';
  if (isEven(randomNumber) === true) {
    trueAnswer += 'yes';
  } if (isEven(randomNumber) === false) {
    trueAnswer += 'no';
  }
  return trueAnswer;
};

const out = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  return name;
};

const numberCheck = (name) => {
  let i = 0;
  while (i < 3) {
    const randomNumber = randomNum();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('You answer: ');
    if (trueOrFalse(randomNumber) !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueOrFalse(randomNumber)}`);
      return console.log(`Let's try again, ${name}`);
    } if (trueOrFalse(randomNumber) === answer) {
      console.log('Correct!');
      i += 1;
    }
  }
  return console.log(`Congratulations, ${name}`);
};
const game = () => {
  numberCheck(out());
};
export default game;
