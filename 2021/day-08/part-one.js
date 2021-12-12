const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/).map(line => line.split(' | '));

const unicNumbers = [2, 4, 3, 7]
function run () {
  let count = 0;
  input.forEach(([before, after]) => {
    after.split(' ').forEach(word => {
    if (unicNumbers.includes(word.length)) {
      count += 1;
    }
  });
  })
  return count;
};
console.log(run());
