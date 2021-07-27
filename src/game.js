const game = (step) => {
  let score = 0;
  while (score < 3) {
    if (step()) {
      // eslint-disable-next-line no-plusplus
      score++;
    } else {
      break;
    }
  }

  return score === 3;
};

export default game;
