const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();
const input = file.split(",").map(Number);

const fuelControl = {
  minFuel: 100000000000000000000000,
}

const recursiveFuel = (base, sum = 0) => base === 0 ? sum : sum + recursiveFuel(base -1, sum +1);

const allFuel = (base) => input.reduce((sum, cur) => sum + recursiveFuel(Math.abs(base - cur)), 0);

function run() {
  let fuel;
  const minNumber = Math.min(...input);
  const maxNumber = Math.max(...input);
  for(let i = minNumber; i <= maxNumber; i += 1) {
    fuel = allFuel(i);
    if (fuel < fuelControl.minFuel) {
      fuelControl.minFuel = fuel;
    }
  };
  return fuelControl.minFuel;
}

console.log(run());
