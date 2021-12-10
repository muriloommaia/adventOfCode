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
  '}': 3,
  ']': 2,
  ')': 1,
  '>': 4,
};


function run() {
  let points = 0;
  let stack = [];
  let arrayPoints = [];
  input.forEach( line => {
    stack = [];
    let lastIndex = line.length - 1;
    for(let i = 0; i < line.length; i++){
      if (openClose[line[i]]) {
        stack.push(openClose[line[i]])
      } 
      else if (line[i] !== stack.pop()) {
        return false;
      } 
      if (i === lastIndex) {
        points = stack.reduceRight((acc, curr) => acc * 5 + counterPoints[curr], 0);
        arrayPoints.push(points);
      }
    }
  });
  arrayPoints = arrayPoints.sort((a, b) => a - b);
  return arrayPoints[(arrayPoints.length - 1)/2];
}

console.log(run());