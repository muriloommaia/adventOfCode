const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/);

function runPolymer(polymer, rules, interactions = 1) {
  let newPolymer = polymer.split('');
  for (let i = 0; i < interactions; i += 1) {
    for (let j = 0; j < newPolymer.length; j += 1) {
      const pair = newPolymer[j] + newPolymer[j + 1];
      if (rules.some(rule => rule[0] === pair)) {
        const correspond = rules.find(rule => rule[0] === pair)[1];
        newPolymer.splice(j + 1, 0, correspond);
        j += 1;
      };
    };
  };
  return newPolymer;
}

function counterFrequence(counter, polymer) {
  polymer.forEach((letter, index) => {
    if (counter[letter]) {
      counter[letter] += 1;
    } else {
      counter[letter] = 1;
    }
  })
  const values = Object.values(counter).map(Number).sort((a, b) => b - a);
  const result = values[0] - values[values.length - 1];
  return result;
};

function run() {
  const counter = {};
  let initialPolymer = input[0];
  const rules = input.slice(2).map(rule => rule.split(' -> '));
  const newPolymer = runPolymer(initialPolymer, rules, 10);
  const result = counterFrequence(counter, newPolymer);

  console.log(result)
};

run();