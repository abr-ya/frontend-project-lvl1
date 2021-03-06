#!/usr/bin/env node
import hello from '../src/cli.js';
import gameEven from '../src/gameEven.js';

console.log('Welcome to the Brain Games!');
const name = hello();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameRes = gameEven();
console.log(`${gameRes ? 'Congratulations' : 'Let\'s try again'}, ${name}!`);
