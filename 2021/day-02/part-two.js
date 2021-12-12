const fs = require('fs');



const funcReadFile = (err, data) => {
  console.time('tempo')
  if (err) (console.log("deu ruim"));
  const submarine = {
    deep: 0,
    horizontal: 0,
    aim: 0,
  }

  const answer = data.toString().split(/\n/).map(line => line.split(' '));
  answer.forEach(([command, value]) => {
    if (command  === 'forward') {
      submarine.horizontal += parseInt(value);
      submarine.deep += parseInt(value) * submarine.aim;
    } else {
      submarine.aim += command === 'up' ? parseInt(-value) : parseInt(value);
    }
  })
  const { deep, horizontal } = submarine;
  console.log(deep * horizontal);
  console.timeEnd('tempo')
}
fs.readFile('./data.txt', funcReadFile)
