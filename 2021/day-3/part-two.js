const fs = require('fs');
const counterBinary = (array, index, base, oxy) => {
  const length = array.length/2;
  let one = 0;
  array.forEach((item) => item[index] === '1' ? one++ : null);
  if (oxy) {
    one = one >= length ? 1 : 0;
  } else {
    if (length === 0.5) {
      base.forEach((item, index) => {base[index] = array[0][index]})
      return 0;
    }
    one = one >= length ? 0 : 1;
  }
  base[index] = one;
  return one;
}
const funcReadFile = (err, data) => {
  if (err) new Error(err);
  const arrayOxy =  new Array(12).fill().map(()=> 0);
  const arrayCO2 = new Array(12).fill().map(()=> 0);
  const answer = data.toString().split(/\n/).map(line => line.split(''));
  
  const getRating = (array, index, oxy) => {
    let current = oxy ? arrayOxy : arrayCO2;
    if (index === 11 ) {
      return current;
    } 
    return getRating(array.filter((item) => item[index + 1] == counterBinary(array, index + 1, current, oxy)
    ), index + 1, oxy);
  }
  // Para o oxigenio
  getRating(answer, -1, true)
  // Para o carbono
  getRating(answer, -1, false)
  const oxyRating = parseInt(arrayOxy.join(''), 2);
  const cO2Rating = parseInt(arrayCO2.join(''), 2);
  const lifeSupportRating = oxyRating * cO2Rating;
  console.log(lifeSupportRating);
  return lifeSupportRating;
}
fs.readFile('./data.txt', funcReadFile)
