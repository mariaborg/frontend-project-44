import {
  correct, question, answer, congratulations, wrong, welcome, randInt,
} from '../index.js';

const gcd = (x, y) => {
  let newx = Math.abs(x);
  let newy = Math.abs(y);
  while (newy) {
    const t = newy;
    newy = newx % newy;
    newx = t;
  }
  return newx;
};

const gcdLogic = () => {
  const name = welcome();
  let res = 0;

  console.log('Find the greatest common divisor of given numbers.');

  while (res < 3) {
    const firstNum = randInt(1, 100);
    const secondNum = randInt(1, 100);
    question(`${firstNum} ${secondNum}`);

    const yourAnswer = answer();
    if (Number(yourAnswer) === gcd(firstNum, secondNum)) {
      res += 1;
      correct();
    } else {
      wrong(gcd(firstNum, secondNum), yourAnswer, name);
      return;
    }
  }

  congratulations(name);
};

export default gcdLogic;
