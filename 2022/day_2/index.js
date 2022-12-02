import fs from "fs";
const file = fs.readFileSync("./day_2/data.txt").toString();
// part 1
const input = file.split(/\n/).map((element) => element.split(" "));

const choices = {
  X: {
    points: 1,
    A: "draw",
    B: "lost",
    C: "win",
  },
  Y: {
    points: 2,
    A: "win",
    B: "draw",
    C: "lost",
  },
  Z: {
    points: 3,
    A: "lost",
    B: "win",
    C: "draw",
  },
};

const choicesPartTwo = {
  X: {
    result: "lost",
    A: 3,
    B: 1,
    C: 2,
  },
  Y: {
    result: "draw",
    A: 1,
    B: 2,
    C: 3,
  },
  Z: {
    result: "win",
    A: 2,
    B: 3,
    C: 1,
  },
};

const main = (data) => {
  let resultPartOne = data.reduce((acc, [opponentChoice, myChoice]) => {
    const { points, [opponentChoice]: result } = choices[myChoice];
    acc += points;
    if (result === "win") {
      return acc + 6;
    }
    if (result === "draw") {
      return acc + 3;
    }
    return acc;
  }, 0);
  let resultPartTwo = data.reduce((acc, [opponentChoice, gameResult]) => {
    const { result, [opponentChoice]: points } = choicesPartTwo[gameResult];
    acc += points;
    if (result === "win") {
      return acc + 6;
    }
    if (result === "draw") {
      return acc + 3;
    }
    return acc;
  }, 0);
  return { resultPartOne, resultPartTwo };
};

main(input);
