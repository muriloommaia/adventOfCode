const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n\n/);

const coord = input[0].split(/\n/).map(x => x.split(',').map(y => parseInt(y)));
const folds = input[1].split(/\n/).map(x => x.split(' ')).map(x => x[2]);

function makePoints(coord, folder) {
  coord.forEach(point => folder[point] = 'x');
};

function doFolds(fold, folder, newFolder) {
  let [axis, local] = fold.split('=');
  local = parseInt(local);
  const entries = Object.entries(folder);
  entries.forEach(([key, value]) => {
    key = key.split(',').map(Number);
    if (axis === 'x') {
      if (key[0] > local) {
        const diference = key[0] - local;
        newFolder[`${local - diference}, ${key[1]}`] = 'x';
      } else {
        newFolder[`${key[0]}, ${key[1]}`] = 'x';
      }
    } else {
      if (key[1] > local) {
        const diference = key[1] - local;
        newFolder[`${key[0]}, ${local - diference}`] = 'x';
      } else {
        newFolder[`${key[0]}, ${key[1]}`] = 'x';
      }
    };

  });
};

function run() {
  let folder = {};
  makePoints(coord, folder);
  let newFolder = {};
  doFolds(folds[0], folder, newFolder);
  console.log(Object.values(newFolder).length);
  return folder;
};

run();