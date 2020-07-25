import readlineSync from 'readline-sync';

const randomNum = () => Math.floor(Math.random() * Math.floor(100));

const arrOperations = ['+', '-', '*'];

const getRandomIntInclusive = (min, max) => {
  const minimumNum = Math.ceil(min);
  const maximumNum = Math.floor(max);
  const num = Math.floor(Math.random() * (maximumNum - minimumNum + 1)) + minimumNum;
  return arrOperations[num];
};

const calculator = (firstNum, operation, secondNum) => {
  let result = '';
  if (operation === '+') {
    result += firstNum + secondNum;
  } if (operation === '-') {
    result += firstNum - secondNum;
  } if (operation === '*') {
    result += firstNum * secondNum;
  }
  return result;
};

const output = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  return name;
};

const check = (name) => {
  let i = 0;
  while (i < 3) {
    const firstNum = randomNum();
    const secondNum = randomNum();
    const operation = getRandomIntInclusive(0, 2);
    console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (calculator(firstNum, operation, secondNum) !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${calculator(firstNum, operation, secondNum)}`);
      return console.log(`Let's try again, ${name}`);
    } if (calculator(firstNum, operation, secondNum) === answer) {
      console.log('Correct!');
      i += 1;
    }
  }
  return console.log(`Congratulations, ${name}`);
};

const gameCalc = () => {
  const names = output();
  check(names);
};
export default gameCalc;
// создать массив с 3мя элементами
// и создать функцию которое будет выводить число от 0 до 3
// это будет оператор
// const arr = ['+', '-', '*'];
// const operation = (arr) => {
//
// };
