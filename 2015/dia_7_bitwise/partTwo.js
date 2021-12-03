const { on } = require('events');
const fs = require('fs');
const { makeArray, arrayNumber } = require('./function');
// true para ligada e false para desligada
const ligthsObj = {};

const lightsOn = (number) => number + 1;
const lightsOff = (number) => number === 0 ? 0 : number - 1;
const lightsToggle = (number) => number + 2;

const loopNumbers = (start, end, callback) => {
  const cordinatesStart = arrayNumber(start.split('.'));
  const cordinatesEnd = arrayNumber(end.split('.'));
  let [xStart, yStart] = cordinatesStart;
  let [xEnd, yEnd] = cordinatesEnd;
  // console.log(xStart,xEnd, yStart, yEnd)
  for(let i = xStart; i <= xEnd; i += 1) {
    for(let j = yStart; j<= yEnd; j += 1) {
      let whatTurn = ligthsObj[`${i}-${j}`]
      if(!ligthsObj[`${i}-${j}`]) {
        ligthsObj[`${i}-${j}`] = 0;
        whatTurn = ligthsObj[`${i}-${j}`];
      }
      ligthsObj[`${i}-${j}`] = callback(ligthsObj[`${i}-${j}`])
    }
  } 
}


const niceStrings = (err, data) => {
  if (err) return 'acabou';
  const strings = data.toString().replace(/,/g, '.').split('\n')
  const stringsNumbers = strings.map((ele) =>  makeArray(ele));
  // console.log(stringsNumbers)
  stringsNumbers.forEach((ligths)=> {
    const [ lit, start, end] = ligths;
    const func = lit === 'on'
    ? lightsOn : lit === 'off' 
    ? lightsOff : lightsToggle;
    // func(start, end);
    // console.log(start, end, func)
    loopNumbers(start, end, func)

  })
  console.log(Object.values(ligthsObj).reduce((acc, cur) => acc + cur ));
}

fs.readFile('./lights.txt', niceStrings)