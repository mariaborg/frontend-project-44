/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import {
  correct, question, answer, congratulations, wrong, welcome, randInt, randOperation,
} from '../index.js';

const calcLogic = () => {
  const name = welcome();

  let res = 0;

  console.log('What is the result of the expression?');

  while (res < 3) {
    const val = `${randInt(1, 100)} ${randOperation()} ${randInt(1, 100)}`;

    question(val);

    const yourAnswer = answer();

    if (yourAnswer == eval(val)) {
      correct();
      res += 1;
    } else {
      wrong(eval(val), yourAnswer, name);
      return;
    }
  }

  congratulations(name);
};

export default calcLogic;
