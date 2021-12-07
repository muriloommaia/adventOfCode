const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();
const input = file.split(",").map(Number);

const fuelControl = {
  minFuel: 100000000000000000000000,
}

const recursiveFuel = (base, sum = 0) => {
  if (base === 0) return 0;
  sum += 1;
  return (sum) + recursiveFuel(base - 1, sum)
}

function allFuel(base) {
  let fuel = 0;
  input.forEach((number) => fuel += recursiveFuel(Math.abs(number - base)));
  return fuel;
}

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
