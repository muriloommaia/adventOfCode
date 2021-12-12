const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/);

const diagram = {};

const addToDiagram = (x, y) => {
  if (!diagram[`${x},${y}`]) {
    diagram[`${x},${y}`] = 1;
  } else {
    diagram[`${x},${y}`] += 1;
  }
};


const onlyConsiderHorizontalAndVertical = ([x1, y1], [x2, y2]) => {
  if (x1 === x2) {
    const start = Math.min(y1, y2);
    const end = Math.max(y1, y2);
    for (let i = start; i <= end; i++) {
      addToDiagram(x1, i);
    }
  } else if (y1 === y2) {
    const start = Math.min(x1, x2);
    const end = Math.max(x1, x2);
    for (let i = start; i <= end; i++) {
      addToDiagram(i, y1);
    }
  }
};

const counterPoints = (object) => {
  const values = Object.values(object);
  let points = 0;
  values.forEach(value => {
    if (value > 1) {
      points += 1;
    }
  })
  return points;
};

const run = () => {
  input.forEach(line => {
    const cordinates = line.split(' -> ')
      .map(coordinate => coordinate.split(',')
        .map(Number));
    onlyConsiderHorizontalAndVertical(cordinates[0], cordinates[1]);
  })
  return counterPoints(diagram);
};

console.log(run());