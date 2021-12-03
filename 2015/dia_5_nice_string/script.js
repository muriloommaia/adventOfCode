const fs = require('fs');

const niceStrings = (err, data) => {

  if (err) return 'acabou';

  const strings = data.toString().split('\n');
  const answer = strings.reduce((acc, cur) => {
    const regex1 = /[aeiou]/ig;
    const test = regex1.test(cur);
    const curSplit = cur.split('');
    const test2 = curSplit.some((ele, id, str) => ele === str[id + 1]);
    const test3 = curSplit.some((ele, id, str) => {
      if(str[id + 1]){
        if (ele === 'a') return str[id + 1] === 'b';
        if (ele === 'c') return str[id + 1] === 'd';
        if (ele === 'p') return str[id + 1] === 'q';
        if (ele === 'x') return str[id + 1] === 'y';
      }
      })
    if (test && !test3 && test2) {
      if (cur.match(regex1).length >= 3) {
        return acc += 1;
      }
    }
    // if (test2 && !test3) return acc += 1;
    return acc;
  }, 0);
  // console.log(answer);
}

fs.readFile('./strings.txt', niceStrings)


const partTwo = (err, data) => {

  if (err) return 'acabou';

  const strings = data.toString().split('\n');
  const answer = strings.reduce((acc, cur) => {
    const curSplit = cur.split('');
    const test = () => {
      for(let i = 0; i < curSplit.length - 1; i++) {
        const re = new RegExp(cur.substring(i, Number(i)+2), 'g');
        // console.log(curSplit[i])
        const match = cur.match(re).length;
        // console.log(match)
        if (match >= 2) return true;
      }
    };
    const test2 = curSplit.some((ele, id, str) => ele === str[id + 2]);
    if (test() && test2) {
        return acc += 1;
    }
    return acc;
  }, 0);
  console.log(answer);
}



fs.readFile('./strings.txt', partTwo)
