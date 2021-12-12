const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/).map(line => line.split('').map(Number));

let count = 0;

function objectConstructor(squadOctopuses) {
  input.forEach((row, y) => {
    row.forEach((cell, x) => {
      squadOctopuses[`${x},${y}`] = cell;
    });
  })
}

function calcFlash(coord, squadOctopuses) {
  const x = coord[0];
  const y = coord[1];
  count += 1;

  squadOctopuses[`${x},${y}`] = 0;
  if (squadOctopuses[`${x + 1},${y}`]) {
    squadOctopuses[`${x + 1},${y}`] === 10
      ? calcFlash([x + 1, y], squadOctopuses)
      : squadOctopuses[`${x + 1},${y}`] += 1;
  }
  if (squadOctopuses[`${x - 1},${y}`]) {
    squadOctopuses[`${x - 1},${y}`] === 10
      ? calcFlash([x - 1, y], squadOctopuses)
      : squadOctopuses[`${x - 1},${y}`] += 1;
  }
  if (squadOctopuses[`${x},${y + 1}`]) {
    squadOctopuses[`${x},${y + 1}`] === 10
      ? calcFlash([x, y + 1], squadOctopuses)
      : squadOctopuses[`${x},${y + 1}`] += 1;
  }
  if (squadOctopuses[`${x},${y - 1}`]) {
    squadOctopuses[`${x},${y - 1}`] === 10
      ? calcFlash([x, y - 1], squadOctopuses)
      : squadOctopuses[`${x},${y - 1}`] += 1;
  }
  if (squadOctopuses[`${x + 1},${y + 1}`]) {
    squadOctopuses[`${x + 1},${y + 1}`] === 10
      ? calcFlash([x + 1, y + 1], squadOctopuses)
      : squadOctopuses[`${x + 1},${y + 1}`] += 1;
  }
  if (squadOctopuses[`${x - 1},${y - 1}`]) {
    squadOctopuses[`${x - 1},${y - 1}`] === 10
      ? calcFlash([x - 1, y - 1], squadOctopuses)
      : squadOctopuses[`${x - 1},${y - 1}`] += 1;
  }
  if (squadOctopuses[`${x + 1},${y - 1}`]) {
    squadOctopuses[`${x + 1},${y - 1}`] === 10
      ? calcFlash([x + 1, y - 1], squadOctopuses)
      : squadOctopuses[`${x + 1},${y - 1}`] += 1;
  }
  if (squadOctopuses[`${x - 1},${y + 1}`]) {
    squadOctopuses[`${x - 1},${y + 1}`] === 10
      ? calcFlash([x - 1, y + 1], squadOctopuses)
      : squadOctopuses[`${x - 1},${y + 1}`] += 1;
  }
}
function verifyAllflashes(squadOctopuses) {
  const keys = Object.values(squadOctopuses);
  return keys.every(cell => cell === 0 | cell === 10);
}
function incrementEnergy(squadOctopuses) {
  const keys = Object.keys(squadOctopuses);
  for (let key = 0; key < keys.length; key += 1) {
    let coord = keys[key].split(',').map(Number);
    if (squadOctopuses[keys[key]] === 10) {
      calcFlash(coord, squadOctopuses);
      key = 0;
    }
  }
  for (let key in squadOctopuses) {
    squadOctopuses[key] += 1;
  }
  for (let key = 0; key < keys.length; key += 1) {
    let coord = keys[key].split(',').map(Number);
    if (squadOctopuses[keys[key]] === 10) {
      calcFlash(coord, squadOctopuses);
      key = 0;
    }
  }
  // console.log(count);
}


function run() {
  const squadOctopuses = {};
  objectConstructor(squadOctopuses);
  let allFlashes = 0;
  console.log(verifyAllflashes(squadOctopuses));
  for (let i = 0; !verifyAllflashes(squadOctopuses); i +=1 ) {
    incrementEnergy(squadOctopuses);
    allFlashes = i;
  }
  console.log(allFlashes + 1)
  // console.log(squadOctopuses)
}

run();