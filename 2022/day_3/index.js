import fs from "fs";
const file = fs.readFileSync("./day_3/data.txt").toString();
const input = file.split(/\n/).map((element) => element.split(""));

const splitToChunks = (array, parts) => {
  const result = [];
  for (let i = parts; i > 0; i--) {
    result.push([...array].splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

const findPriority = (item) => {
  const charCodeAt = item.charCodeAt(0);
  if (charCodeAt >= 65 && charCodeAt <= 90) {
    return charCodeAt - 38;
  } else if (charCodeAt >= 97 && charCodeAt <= 122) {
    return charCodeAt - 96;
  }
};
const main = (data) => {
  // Part 1
  const rucksackItems = [];
  data.forEach((rucksack) => {
    const [part1, part2] = splitToChunks(rucksack, 2);
    const item = part1.find((item) => part2.includes(item));
    if (item) rucksackItems.push(item);
  });
  const resultPart1 = rucksackItems.reduce((acc, item) => {
    const priority = findPriority(item);
    return acc + priority;
  }, 0);
  // Part 2
  const rucksackItems2 = [];

  for (let i = 0; i < data.length; i += 3) {
    const item = data[i].find(
      (item) => data[i + 1].includes(item) && data[i + 2].includes(item)
    );
    if (item) rucksackItems2.push(item);
  }
  const resultPart2 = rucksackItems2.reduce((acc, item) => {
    const priority = findPriority(item);
    return acc + priority;
  }, 0);
  return { resultPart1, resultPart2 };
};

main([...input]);
