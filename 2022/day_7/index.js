import fs from "fs";
const file = fs.readFileSync("./day_7/data.txt").toString();
const input = file.split(/\n/);

const calcPart1 = (directoryObject) => {
  const directories = {};
  const allDirectories = Object.keys(directoryObject);
  allDirectories.forEach((actualPath) => {
    const allSpace = Object.values(directoryObject[actualPath]).reduce(
      (acc, val) => {
        return Number(val) ? acc + Number(val) : acc;
      },
      0
    );
    allDirectories.forEach((otherPath) => {
      if (actualPath.includes(otherPath) && otherPath !== actualPath) {
        directories[otherPath] = directories[otherPath]
          ? directories[otherPath] + allSpace
          : allSpace;
      }
    });
    directories[actualPath] = directories[actualPath]
      ? directories[actualPath] + allSpace
      : allSpace;
  });
  return directories;
};

const main = (data) => {
  const directories = {};
  const path = [];
  data.forEach((line) => {
    const dirPath = path.join("/");
    const commandLine = line.split(" ");
    const isCommand = commandLine[0] === "$";
    const isFile = Number(commandLine[0]) ?? false;
    const isDirectory = commandLine[0] === "dir";
    if (isCommand) {
      const command = commandLine[1];
      if (command === "cd") {
        const directory = commandLine[2];
        directory === ".." ? path.pop() : path.push(directory);
        return null;
      }
    }
    if (isFile) {
      const fileSpace = commandLine[0];
      const fileName = commandLine[1];
      directories[dirPath] = { ...directories[dirPath], [fileName]: fileSpace };
    }
    if (isDirectory) {
      const directoryName = commandLine[1];
      directories[dirPath] = {
        ...directories[dirPath],
        dir: [...(directories[dirPath]?.dir ?? []), directoryName],
      };
    }
  });
  const dataPart1 = calcPart1({ ...directories });
  const valuesAtMost100000 = Object.values(dataPart1)
    .filter((val) => val < 100000)
    .reduce((acc, val) => acc + val, 0);

  // part2
  const system = 30000000;
  const actualFreeSpace = 70000000 - dataPart1["/"];
  const necessarySpace = system - actualFreeSpace;
  const valuesAtMostBaseSpace = Object.values(dataPart1)
    .sort((a, b) => a - b)
    .find((val) => val > necessarySpace);
  // 2531835
  return { part1: valuesAtMost100000, part2: valuesAtMostBaseSpace };
};

main([...input]);
