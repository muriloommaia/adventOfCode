const fs = require('fs');
const funcReadFile = (err, data) => {
  console.time('tempo')
  if (err) (console.log("deu ruim"));
  let increase = 0;
  const answer = data.toString().split(/\n/);
  data.toString().split(/\n/).reduce((acc, cur) => {
    increase = Number(cur) > Number(acc)  ? increase + 1 : increase
    return cur;
  }, 0);

  console.log("first part:", increase - 1);
  console.timeEnd('tempo')
}
fs.readFile('./data.txt', funcReadFile)
