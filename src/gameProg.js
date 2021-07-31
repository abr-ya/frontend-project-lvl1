import readlineSync from 'readline-sync';
import game from './game.js';
import { getRandomInt } from './utils.js';

const progStep = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const hide = getRandomInt(0, 10);
  const n = 10;
  const arr = [start];
  let i = 0;
  while (i < n) {
    arr.push(arr[i] + step);
    i += 1;
  }
  const question = arr.map((el, j) => (j === hide ? '..' : el.toString())).join(' ');
  const corAns = arr[hide].toString();
  console.log('Question: ', question);
  const answer = readlineSync.question('Your answer:  ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

export default () => game(progStep);
