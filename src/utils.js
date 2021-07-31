// верхнее значение не входит
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// см. формула Эвклида
export const gcd = (a, b) => {
  if (a === b) return a;

  return (a > b) ? gcd(a - b, b) : gcd(a, b - a);
};
