const fs = require('fs');
// const { counterBinary } = require('./services');
const counterBinary = (array, index) => {
  const length = array.length/2;
  let one = 0;
  array.forEach((item) => {
    if (item[index] == 1) one++;
  })
  return one > length ? 1 : 0;
}
const funcReadFile = (err, data) => {
  if (err) new Error(err);
  const baseArray = new Array(12).fill().map(()=> 0);
  const answer = data.toString().split(/\n/).map(line => line.split(''));
  const gamma= baseArray.map( (item, index) => {
    return counterBinary(answer, index);
  })
  const epsilon = gamma.map((item) => item == 1 ? 0 : 1);
  const gammaRate = parseInt(gamma.join(''), 2);
  const epsilonRate = parseInt(epsilon.join(''), 2);
  console.log(gammaRate * epsilonRate);
  return answer;
}
fs.readFile('./data.txt', funcReadFile)
