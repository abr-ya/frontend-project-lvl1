import readlineSync from 'readline-sync';
import game from './game.js';
import { getRandomInt } from './utils.js';

const evenStep = () => {
  const numX = getRandomInt(1, 10);
  const numY = getRandomInt(1, 10);
  const opNum = getRandomInt(0, 3); // верх не входит!
  const sign = ['+', '-', '*'][opNum];
  const func = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
  ][opNum];
  const corAns = func(numX, numY).toString();
  console.log('Question: ', `${numX} ${sign} ${numY}`);
  const answer = readlineSync.question('Your answer:  ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

export default () => game(evenStep);
