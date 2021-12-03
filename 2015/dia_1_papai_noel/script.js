const fs = require('fs');
const funcReadFile = (err, data) => {
  console.time('tempo')
  if (err) (console.log("deu ruim"));
  const answer =  data.toString().split('').reduce((acc, cur, idx) => {
    cur === '(' ? acc += 1 : acc -= 1
    if (acc == '-1') console.log('andar',idx);
    return acc;
  }, 0);
  console.log(answer);
  console.timeEnd('tempo')
}
fs.readFile('./data.txt', funcReadFile)
