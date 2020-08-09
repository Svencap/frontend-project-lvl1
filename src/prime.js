import readlineSync from 'readline-sync';

const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const output = () => {
  console.log('Welcome to the Brain Games!');
  const names = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${names}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  return names;
};

const isPrime = (num) => {
  let counter = 0;
  let result;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      counter += 1;
    }
  }
  if (counter === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const checkAnswer = (name) => {
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

const gamePrime = () => {
  const names = output();
  checkAnswer(names);
};
export default gamePrime;
