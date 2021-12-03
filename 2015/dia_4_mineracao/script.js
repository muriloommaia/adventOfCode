const md5 = require('md5');
const fs = require('fs');
const mineraAdventCoins = (err, data) => {
  console.time('time')
  if (err) return 'acabou';
  const script = data.toString();
  let test = true;
  let substring;
  for (let i = 1; true; i += 1) {
    substring = md5(script + i).substring(0,6);
    if (substring === '000000') {
      console.log(i)
      break
    }
  }
  console.timeEnd('time')
}



fs.readFile('./encript.txt', mineraAdventCoins)

const regex1 = /[aeiou]/ig;
const regex2 = /a+/ig;
const texto = 'abrIdaa';
const vogal = texto.match(regex2)
console.log(vogal)