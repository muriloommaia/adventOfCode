const { on } = require('events');
const fs = require('fs');
const { bitWise } = require('./function');

const circuit = {};

const niceStrings = (err, data) => {
  if (err) return 'acabou';
  const strings = data.toString().replace(/,/g, '.').split('\n')
  const allCircuit = strings.map((string) => string.split(' '))
  console.log( allCircuit)
  
}

fs.readFile('./circuit.txt', niceStrings)







// 1: 01;
// 2: 10exit

// R: 11
// 3: 11

console.log(123 << 2);









