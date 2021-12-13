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

function doGraph(password) {
  let graph = '';
  for (let i = 0; i < 6; i += 1) {
    const array = password.filter(x => x[1] === i);
    const maxNumber = Math.max(...array.map(x => x[0]));
    for (let j = 0; j <= maxNumber; j += 1) {
      const [x, y] = password[j];
      // console.log(`x: ${x}, y: ${y}; i: ${i}, j: ${j}`);
      if (password.some(x => x[0] === j && x[1] === i)) {
        graph += ' X ';
      } else {
        graph += ' . ';
      }
    }
    graph += '\n';
  }
  console.log(graph);
}
function run() {
  let folder = {};
  makePoints(coord, folder);
  let newFolder = {};
  doFolds(folds[0], folder, newFolder);
  for (let i = 1; i < folds.length; i++) {
    folder = newFolder;
    newFolder = {};
    doFolds(folds[i], folder, newFolder);
  }
  const keys = Object.keys(newFolder);
  const passWord = keys.map(x => x.split(',').map(Number)).sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);
  // console.log(passWord)
  const graph = doGraph(passWord);
  return folder;
};

run();