function makeArray(array) {
  const arr = [];
    array.split(' ').forEach(element => {
      if(element === 'on') arr.push(element)
      if(element === 'off') arr.push(element)
      if(element === 'toggle') arr.push(element)
      if(Number(element)) arr.push(element);
    });
    return arr;
}

function arrayNumber(array) {
  return array.map(element => Number(element));
}
module.exports = { 
  makeArray,
  arrayNumber,
 }