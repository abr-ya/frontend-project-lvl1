import readlineSync from 'readline-sync';
import game from './game.js';
import { getRandomInt } from './utils.js';

const evenStep = () => {
  const value = getRandomInt(1, 20);
  const corAns = value % 2 === 0 ? 'yes' : 'no';
  console.log('Question: ', value);
  const answer = readlineSync.question('Your answer:  ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

export default () => game(evenStep);
