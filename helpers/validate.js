const isPositiveInteger = num => {
  return !(/[^0-9]/gi.test(`${num}`))
}

module.exports = {
  isPositiveInteger
}