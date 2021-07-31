import readlineSync from 'readline-sync';
import game from './game.js';
import { getRandomInt } from './utils.js';

const primeStep = () => {
  const num = getRandomInt(1, 20);
  const corAns = [1, 3, 5, 7, 11, 13, 17, 19].includes(num) ? 'yes' : 'no';
  console.log('Question:', num);
  const answer = readlineSync.question('Your answer: ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

export default () => game(primeStep);
