const fs = require('fs');
const reducerThree = (answer, i) => {
  return [answer[i], answer[i - 1], answer[i - 2]].reduce((acc, curr) => acc + curr);
}
const funcReadFile = (err, data) => {
  console.time('tempo')
  if (err) (console.log("deu ruim"));
  let increase = 0;
  const answer = data.toString().split(/\n/).map( item => Number(item));
  for (let i = 2; i < answer.length - 1; i++) {
    const threeOne = reducerThree(answer, i);
    const threeTwo = reducerThree(answer, i + 1);
    if (threeOne < threeTwo) {
      increase += 1;
    }
  }
  console.log("second:", increase);
  console.timeEnd('tempo')
}
fs.readFile('./data.txt', funcReadFile)
