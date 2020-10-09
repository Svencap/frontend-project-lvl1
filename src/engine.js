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

const rounds = (name, trueOrFalse) => {
  for (let correctAnswer = 0; correctAnswer < 3; correctAnswer += 1) {
    const [question, answer] = trueOrFalse();
    const playerAnswer = QuestionNum(question);
    if (playerAnswer !== answer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      return console.log(`Let's try again, ${name}`);
    }
    if (playerAnswer === answer) {
      console.log('Correct!');
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export { greeting, rounds };
