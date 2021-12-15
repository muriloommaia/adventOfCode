const fs = require('fs');
const file = fs.readFileSync('data.txt').toString();

const input = file.split(/\n/);

const ways = {
  start: [],
  end: [],
};

function startEnd(object = input) {
  object.forEach((way) => {
    const divide = way.split('-');
    if (way.includes('end')) {
      const index = divide.indexOf('end');
      ways.end.push(divide[index === 0 ? 1 : 0]);
    } else if (way.includes('start')) {
      const index = divide.indexOf('start');
      ways.start.push(divide[index === 0 ? 1 : 0]);
    } else {
      if (ways[divide[0]]) {
        ways[divide[0]].push(divide[1]);
      } else {
        ways[divide[0]] = [divide[1]];
      }
      if (ways[divide[1]]) {
        ways[divide[1]].push(divide[0]);
      } else {
        ways[divide[1]] = [divide[0]];
      }
    }
  });
}

function isSmall(c) {
  return c === c.toLowerCase();
}

function run() {
  startEnd();
  const { start, end } = ways;

  console.log(start)
}
  run();

  // const stack = [['start']];
  // const paths = [];
  // while (stack.length > 0) {
  //   const path = stack.pop();
  //   const lastNode = path[path.length - 1];
  //   console.log(lastNode)
  //   if (lastNode === 'end') {
  //     paths.push(path);
  //   } else {
  //     const adj = ways[lastNode];
  //     for (let i = 0; i < adj.length; i++) {

  //       if (isSmall(adj[i])) {
  //         if (!path.includes(adj[i])) {
  //           stack.push([...path, adj[i]]);
  //         }
  //       } else {
  //         stack.push([...path, adj[i]]);
  //       }
  //     }
  //   }
  // }