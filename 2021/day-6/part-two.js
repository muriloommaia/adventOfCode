const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(",").map(Number);
function run(days = 18) {
  let daysToCreate = new Array(9).fill(0);
  input.forEach((daysCreate) => daysToCreate[daysCreate] += 1);
  for (let i = 0; i < days; i += 1) {
  const zeroDays = daysToCreate.shift();
  daysToCreate[6] += zeroDays;
  daysToCreate.push(zeroDays);
  }
  let count = 0;
  for (let number of daysToCreate) {
    count += number;
  }
  return count;
}

console.log(run(256))
