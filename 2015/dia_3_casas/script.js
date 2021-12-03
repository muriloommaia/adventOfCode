const fs = require('fs');
let santaC = [0, 0]
let santaR = [0, 0]
const paraLeste = (mapa, santaC) => {
  if (!Array.isArray(mapa[santaC[0]])) {
    mapa[santaC[0]] = [0];
  }
  if(!mapa[santaC[0]][santaC[1]]) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if(mapa[santaC[0]][santaC[1] + 1] === undefined) {
    mapa[santaC[0]][santaC[1] + 1] = 0;
  }
  mapa[santaC[0]][santaC[1]] += 1;
  mapa[santaC[0]][santaC[1] + 1] += 1;
  santaC[1] += 1;
}
const paraOeste = (mapa, santaC, sup) => {
  if (!Array.isArray(mapa[santaC[0]])) {
    mapa[santaC[0]] = [0];
  }
  if(!Number(mapa[santaC[0]][santaC[1]])) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if(santaC[1] === 0) {
    mapa.forEach((elem, idx) => mapa[idx].unshift(0));
  }
  if(!Number(mapa[santaC[0]][santaC[1] - 1])) {
    mapa[santaC[0]][santaC[1] - 1] = 0;
  }
  mapa[santaC[0]][santaC[1] - 1] += 1;
  mapa[santaC[0]][santaC[1]] += 1;
  if (santaC[1] === 0){
  santaC[1] = 0;
  sup[1] += 1;
}
  else {
    santaC[1] -= 1;
  } 
}
const paraNorte = (mapa, santaC, sup) => {
  if (!Array.isArray(mapa[santaC[0]])) {
    mapa[santaC[0]] = [0];
  }
  if(!mapa[santaC[0]][santaC[1]]) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if(santaC[0] === 0) {
    mapa.unshift([0]);
  }
  if(!mapa[santaC[0]][santaC[1]]) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if (santaC[0] === 0) {
    santaC[0] = 0;
    sup [0] += 1;
  } else {
    santaC[0] -= 1;
  } 
  mapa[santaC[0]][santaC[1]] += 1;
  mapa[santaC[0] + 1][santaC[1]] += 1;
}
const paraSul = (mapa, santaC, sup) => {
  if (!Array.isArray(mapa[santaC[0]])) {
    mapa[santaC[0]] = [0];
  }
  if (!Array.isArray(mapa[santaC[0] + 1])) {
    mapa[santaC[0] + 1] = [0];
  }
  if(!mapa[santaC[0]][santaC[1]]) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if(!mapa[santaC[0] + 1][santaC[1]]) {
    mapa[santaC[0] + 1][santaC[1]] = 0;
  }
  if(mapa[santaC[0]][santaC[1]] === undefined) {
    mapa[santaC[0]][santaC[1]] = 0;
  }
  if(mapa[santaC[0] + 1][santaC[1]] === undefined) {
    mapa[santaC[0] + 1][santaC[1]] = 0;
  }
  mapa[santaC[0]][santaC[1]] += 1;
  mapa[santaC[0] + 1][santaC[1]] += 1;
  santaC[0] += 1;
}
const funcReadFile = (err, data) => {
  if (err) (console.log("deu ruim"));
  const direcoes = data.toString().split('');
  // const direcoes = '<><><><><>'.split('');
  let mapa = [];
  console.time('tempo')
  let santa
  let santaSup;
  direcoes.forEach((element, id) => {
    if (id % 2 === 0) {
      santa = santaC;
      santaSup = santaR;
    };
    if (id % 2 !== 0) {
      santa = santaR;
      santaSup = santaC
    }
    // console.log(`santaClaus: ${santaC}, santaRobot: ${santaR}`)
    if (element === '>') paraLeste(mapa,santa, santaSup);
    else if (element === '<') paraOeste(mapa,santa, santaSup);
    else if (element === '^') paraNorte(mapa,santa, santaSup);
    else if (element === 'v') paraSul(mapa,santa, santaSup);
    // console.log(mapa, `idX: ${idX}, position: ${position}, id:${id}, prox: ${direcoes[id + 1]}`)
  });
  console.timeEnd('tempo')
  // console.log(mapa)
  let newMapa = mapa.reduce((acc, cur) => acc.concat(cur), []);
  // console.log(newMapa)
  console.log(newMapa.filter(e => e >= 1).length)
}
fs.readFile('./direcoes.txt', funcReadFile)

const longestCommonPrefix = function(strs) {
  let output = '';
  strs.sort((a,b) => a.length - b.length) 
  console.log(strs)
  let letras = strs[0].split('');
  let i = letras.length;
  let boolean = false;
  while (i >= 0 && !boolean) {
      let teste = letras.join('');

      boolean = strs.every((e) => e.substring(0,i).includes(teste));
      if(boolean) output = teste;
      // console.log(teste)
      i -= 1;
      letras.pop();
  } 
  return output;
};

console.log(longestCommonPrefix(["reflower","flow","flight"]));