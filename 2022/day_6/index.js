import fs from "fs";
const file = fs.readFileSync("./day_6/data.txt").toString();
const input = file.split("");

const main = (data) => {
  let packageArray = [];
  let packageIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (packageArray.length === 14) break;

    if (packageArray.includes(data[i])) {
      const findIndex = packageArray.findIndex(
        (element) => element === data[i]
      );
      i = i - (packageArray.length - findIndex);
      packageArray = [];
      packageIndex = 0;
      continue;
    }

    packageArray.push(data[i]);
    packageIndex = i + 1;
  }
  return { packageArray, packageIndex };
};

main([...input]);
