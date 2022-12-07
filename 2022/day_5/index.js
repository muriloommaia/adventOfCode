import fs from "fs";
const file1 = fs.readFileSync("./day_5/data.txt").toString();
const file2 = fs.readFileSync("./day_5/crates.txt").toString();
const dataInput = file1.split(/\n/).map((element) => element.split(" "));
const cratesInput = file2.split(/\n/).map((element) => element.split(" "));

const main = (moves, crates) => {
  const containerCrates1 = crates.reduce((acc, crate) => {
    const position = crate.shift();
    acc[position] = crate.reverse();
    return acc;
  }, {});
  const containerCrates2 = crates.reduce((acc, crate) => {
    const position = crate.shift();
    acc[position] = crate.reverse();
    return acc;
  }, {});
  moves.forEach((move) => {
    const [quantity, origin, destiny] = [move[1], move[3], move[5]];
    const cratesToMove = containerCrates1[origin].splice(0, quantity).reverse();
    containerCrates1[destiny].splice(0, 0, ...cratesToMove);
  });
  moves.forEach((move) => {
    const [quantity, origin, destiny] = [move[1], move[3], move[5]];
    const cratesToMove = containerCrates2[origin].splice(0, quantity);
    containerCrates2[destiny].splice(0, 0, ...cratesToMove);
  });
  const responsePart1 = Object.values(containerCrates1)
    .map((firstItem) => firstItem[0])
    .join("");
  const responsePart2 = Object.values(containerCrates2)
    .map((firstItem) => firstItem[0])
    .join("");
  return { responsePart1, responsePart2 };
};

main([...dataInput], [...cratesInput]);
