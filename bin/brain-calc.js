#!/usr/bin/env node
import hello from '../src/cli.js';
import gameCalc from '../src/gameCalc.js';

console.log('Welcome to the Brain Games!');
const name = hello();
console.log('What is the result of the expression?');
const gameRes = gameCalc();
console.log(`${gameRes ? 'Congratulations' : 'Let\'s try again'}, ${name}!`);
