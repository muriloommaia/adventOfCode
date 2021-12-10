const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/).map(line => line.split(''));

const openClose = {
  '{': '}',
  '[': ']',
  '(': ')',
  '<': '>',
};
const counterPoints = {
  '}': 1197,
  ']': 57,
  ')': 3,
  '>': 25137,
};


function run() {
  let points = 0;
  let stack = [];
  input.forEach( line => {
    for(let i = 0; i < line.length; i++){
      if (openClose[line[i]]) {
        stack.push(openClose[line[i]])
      } 
      else if (line[i] !== stack.pop()) {
        points += counterPoints[line[i]];
        return false;
      }
    }
  });
  return points;
}

console.log(run());