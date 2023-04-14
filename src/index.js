import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const question = (val) => {
  console.log(`Question: ${val}`);
};

export const answer = () => readlineSync.question('Your answer: ');

export const correct = () => {
  console.log('Correct!');
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const wrong = (correctAnswer, incorrect, name) => {
  console.log(`'${incorrect}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
};

export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randOperation = () => {
  const val = randInt(0, 2);

  switch (val) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
};
