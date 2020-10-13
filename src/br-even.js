import randomNum from './randomNumber.js';

import playGame from './engine.js';

const isEven = (number) => number % 2 === 0;

const testEven = () => {
  const min = 1;
  const max = 100;
  const question = randomNum(min, max);
  const answer = isEven(question) ? 'yes' : 'no'; // Возвращает ответ с которым надо стравнить ответ пользователя
  return [question, answer];
};

/* const numberCheck = (name) => {
  let i = 0;
  while (i < 3) {
    const randomNumber = randomNum(0, 100);
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
 */
const game = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  playGame(description, testEven);
};
export default game;
