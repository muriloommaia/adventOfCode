const fs = require('fs');



const funcReadFile = (err, data) => {
  console.time('tempo')
  if (err) (console.log("deu ruim"));
  const submarine = {
    forward: 0,
    down: 0,
    up: 0,
  }
  const answer = data.toString().split(/\n/).map(line => line.split(' '));
  answer.forEach(line => {
    submarine[line[0]] += parseInt(line[1]);
  })
  const deep = submarine.down - submarine.up;
  const { forward } = submarine;
  console.log(deep * forward);
  console.timeEnd('tempo')
}
fs.readFile('./data.txt', funcReadFile)
