import fs from "fs";
const file = fs.readFileSync("./day_4/data.txt").toString();
const input = file.split(/\n/).map((element) => element.split(","));

const main = (data) => {
  const suchPairs = data.reduce((acc, pairs) => {
    const [pair1, pair2] = pairs[0].split("-").map(Number);
    const [pair3, pair4] = pairs[1].split("-").map(Number);
    if (pair1 <= pair3 && pair2 >= pair4) {
      acc++;
    } else if (pair1 >= pair3 && pair2 <= pair4) {
      acc++;
    }
    return acc;
  }, 0);
  const overlappingPairs = data.reduce((acc, pairs) => {
    const [pair1, pair2] = pairs[0].split("-").map(Number);
    const [pair3, pair4] = pairs[1].split("-").map(Number);
    if (pair1 <= pair3 && pair3 <= pair2) {
      acc++;
    } else if (pair3 <= pair1 && pair1 <= pair4) {
      acc++;
    }
    return acc;
  }, 0);
  return { suchPairs, overlappingPairs };
};

main([...input]);
