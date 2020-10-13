import readlineSync from 'readline-sync';

// import randomNum from './randomNumber.js';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  return name;
};

const QuestionNum = (num) => {
  console.log(`Question: ${num}`);
  return readlineSync.question('You answer: ');
};

const rounds = (name, nameOfGame) => {
  const finishCorrectAnswer = 3;
  for (let correctAnswer = 0; correctAnswer < finishCorrectAnswer; correctAnswer += 1) {
    const [question, answer] = nameOfGame();
    const playerAnswer = QuestionNum(question);
    if (playerAnswer !== answer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};
// соединить эти функции в одну новую

const playGame = (description, nameOfGame) => {
  const name = greeting(description);
  rounds(name, nameOfGame);
};
export default playGame;
