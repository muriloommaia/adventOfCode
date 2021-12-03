const fs = require('fs');
const funcReadFile = (err, data) => {
  console.time('tempo');
  if (err) (console.log("deu ruim"));
  const presentes = data.toString().split(`\n`);
  let fita = 0;
  const numberFeet = presentes.reduce((acc, cur) => {
    const dimentions = cur.split('x');
    const [l, w, h] = dimentions;
    let area = 2 * l * w + 2 * w * h + 2 * h * l;
    dimentions.sort((a,b) => a - b);
    area += dimentions[0] * dimentions[1];
    fita += dimentions[0] * 2 + dimentions[1] * 2 + l * w * h;
    acc += area;
    return acc; 
  }, 0);
  console.log(numberFeet, fita)
}
fs.readFile('./presentes.txt', funcReadFile)
