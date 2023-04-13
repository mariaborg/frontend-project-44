/* eslint-disable no-constant-condition */
import readlineSync from 'readline-sync';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const evenLogic = (name) => {
  let res = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (res < 3) {
    const number = rand(0, 100);

    console.log(`Question ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (!(answer === 'yes' || answer === 'no') || !((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0))) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${number % 2 === 0 ? 'yes' : 'no'}'. \nLet's try again, Bill!`);
      return;
    }

    console.log('Correct!');
    res += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenLogic;
