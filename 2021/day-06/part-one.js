const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(",").map(Number);

function run(days = 18) {
  let initialGlowing = input.length;
  let glowing = [].concat(input);
  for (let day = 0; day < days; day += 1) {
    let newGlowing = [...glowing];
    for (let i = 0; i < newGlowing.length; i += 1) {
      glowing[i] -= 1;
      if (glowing[i] === -1) {
        glowing.push(8);
        glowing[i] = 6;
      } 
    }
  }
  return glowing.length;
}

console.log(run(80))