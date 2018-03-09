const assert = require('assert')
const fivaa = require('../1_fivaa')

describe('Fivaa', () => {
  let result = {
    6: '55777777\n4466666\n335555\n22444\n1133\n002',
    5: '4466666\n335555\n22444\n1133\n002',
    1: '002'
  }

  it(`should return ${result[5]} when given the input is 5`, done => {
    assert.equal(fivaa.fivaa(5), result[5])
    done()
  })

  it(`should return ${result[6]} when given the input is 6`, done => {
    assert.equal(fivaa.fivaa(6), result[6])
    done()
  })

  it(`should return ${result[1]} when given the input is 1`, done => {
    assert.equal(fivaa.fivaa(1), result[1])
    done()
  })
})