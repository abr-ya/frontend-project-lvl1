#!/usr/bin/env node
import hello from '../src/cli.js';
import gamePrime from '../src/gamePrime.js';

console.log('Welcome to the Brain Games!');
const name = hello();
console.log('What is the result of the expression?');
const gameRes = gamePrime();
console.log(`${gameRes ? 'Congratulations' : 'Let\'s try again'}, ${name}!`);
