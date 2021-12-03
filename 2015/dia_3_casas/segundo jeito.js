const fs = require('fs');
const obj = {};
const positionS = ['x', 0, 'y', 0];
const positionR = ['x', 0, 'y', 0];
const objConstructor = (pos) => {
  obj[pos.join('')] ? obj[pos.join('')] += 1 : obj[pos.join('')] = 1;
}
const funcReadFile = (err, data) => {
  if (err) (console.log("deu ruim"));
  console.time('tempo')
  const direcoes = data.toString().split('');
  direcoes.forEach((element, id) => {
    let position;
    id % 2 === 0 ? position = positionS : position = positionR;
    if (element === '>') position[1] += 1;
    if (element === '<') position[1] -= 1;
    if (element === '^') position[3] += 1;
    if (element === 'v') position[3] -= 1;
    objConstructor(position);
  })
  console.log(Object.keys(obj).length);
  console.timeEnd('tempo')
}
fs.readFile('./direcoes.txt', funcReadFile)

