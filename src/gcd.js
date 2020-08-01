import readlineSync from 'readline-sync';

const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const output = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers');
  return name;
};

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
  return result;
};

const checkAnswer = (name) => {
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

const game = () => {
  const names = output();
  checkAnswer(names);
};
export default game;
