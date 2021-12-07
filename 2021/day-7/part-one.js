const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(",").map(Number);

const fuelControl = {
  minFuel: 100000000,
}

function allFuel(base) {
  let fuel = 0;
  input.forEach((number) => fuel += Math.abs(number - base));
  return fuel;
}

function run () {
  let fuel;
  input.forEach((number) => {
    fuel = allFuel(number);
    if (fuel < fuelControl.minFuel) {
      fuelControl.minFuel = fuel;
    }
  })
  return fuelControl.minFuel;
}

console.log(run());

