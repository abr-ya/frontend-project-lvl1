import readlineSync from 'readline-sync';
import game from './game.js';
import { getRandomInt, gcd } from './utils.js';

const gcdStep = () => {
  const numX = getRandomInt(1, 20);
  const numY = getRandomInt(1, 20);
  const corAns = gcd(numX, numY).toString();
  console.log('Question: ', `${numX} ${numY}`);
  const answer = readlineSync.question('Your answer:  ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

export default () => game(gcdStep);
