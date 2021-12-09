const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/).map(line => line.split(' | '));

const NDigits = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'zero': 0
};
function findOthersKeys (numbers, before) {
  before = before.split(' ');
  numbers = {...numbers};
  for (let i = 0; i < before.length; i+= 1) {
    if (before[i].length === 5) {
      if (numbers.one.split('').every((char) => before[i].includes(char))) {
        numbers.three = before[i];
      } else {
        let countFour = 0;

        for (let j = 0; j < before[i].length; j += 1) {
          if (numbers.four.includes(before[i][j])) {
            countFour += 1;
          };
        };
        if (countFour === 3) {
          numbers.five = before[i];
        } else {
          numbers.two = before[i];
        };
      };
    } if (before[i].length === 6) {
      if (numbers.four.split('').every((char) => before[i].includes(char))) {
        numbers.nine = before[i];
      } else {
        if (numbers.one.split('').every((char) => before[i].includes(char))) {
          numbers.zero = before[i];
        } else {
          numbers.six = before[i];
        };
      };
    };
  };
  return numbers;
};

function findUnicKeys (before) {
  const keys = {};
  before = before.split(' ').forEach((key) => {
    if (key.length === 2) {
      keys.one = key;
    } else if (key.length === 3) {
      keys.seven = key;
    } else if (key.length === 4) {
      keys.four = key;
    } else if (key.length === 7) {
      keys.eight = key;
    };
  });
  return keys;
};

function calcAfter (keys, after) {
  let number = '';
  const valuesKeys = Object.entries(keys);
  after.split(' ').forEach((digits) => {
    valuesKeys.forEach(([key, value]) => {
      if (value.length === digits.length) {
      if (digits.split('').every((char) => value.includes(char))) {
        number += NDigits[key];
      };
    };
    });
  });
  return Number(number);
}

function run () {
let keys = {};
let calculate = [];
  input.forEach(([before, after]) => {
    keys = findUnicKeys (before);
    keys = {...findOthersKeys(keys, before)}
    calculate.push(calcAfter(keys, after));
  });
  const total = calculate.reduce((acc, curr) => acc + curr);
  return total;
};
console.log(run());
