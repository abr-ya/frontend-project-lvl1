import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const oneStep = () => {
  const value = getRandomInt(1, 20);
  const corAns = value % 2 === 0 ? 'yes' : 'no';
  console.log('Question: ', value);
  const answer = readlineSync.question('Your answer:  ');
  const res = answer === corAns;
  console.log(res ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${corAns}'.`);

  return res;
};

const gameEven = () => {
  let score = 0;
  while (score < 3) {
    if (oneStep()) {
      // eslint-disable-next-line no-plusplus
      score++;
    } else {
      break;
    }
  }

  return score === 3;
};

export default gameEven;
