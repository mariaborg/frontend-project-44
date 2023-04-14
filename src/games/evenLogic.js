/* eslint-disable no-constant-condition */
import {
  correct, question, answer, congratulations, wrong, welcome, randInt,
} from '../index.js';

const evenLogic = () => {
  const name = welcome();

  let res = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (res < 3) {
    const number = randInt(0, 100);

    question(number);

    const answerRes = answer();

    if (!(answerRes === 'yes' || answerRes === 'no') || !((answerRes === 'yes' && number % 2 === 0) || (answerRes === 'no' && number % 2 !== 0))) {
      wrong(number % 2 === 0 ? 'yes' : 'no', answerRes, name);
      return;
    }

    correct();
    res += 1;
  }

  congratulations(name);
};

export default evenLogic;
