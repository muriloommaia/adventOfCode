import fs from "fs";
const file = fs.readFileSync("./src/day1/data.txt").toString();
// part 1
const input = file.split(/\n/);

const main = (data) => {
  let arrayCalories = [];
  let elf = 0;
  data.forEach((item) => {
    if (item === "") {
      arrayCalories.push(elf);
      elf = 0;
    } else {
      elf += +item;
    }
  });
  const sortedArray = arrayCalories.sort((a, b) => b - a);
  const first = sortedArray[0];
  const threeFirst = sortedArray.slice(0, 3).reduce((a, b) => a + b, 0);
  return {
    part1: first,
    part2: threeFirst,
  };
};

main(input);
