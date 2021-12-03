const bitWise = {
  NOT: (array) => ~array[1],
  AND: (array) => array[0] & array[2],
  LSHIFT: (array) => array[0] << array[2],
  RSHIGT: (array) => array[0] >> array[2],
  OR: (array) => array[0] | array[2],
}

module.exports = {
  bitWise,
}