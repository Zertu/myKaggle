const main = require('./index'),
  util = require('./util'),
  Papa = require('babyparse')

test('test testData', async() => {
  let result = Papa.parse(await util.readFile('./data/test.csv'), {header: true})
  result
    .data
    .pop()
  let res = await main('./data')
  for (let i = 0; i < res.length; i++) {
    expect(res[i]).toBe(result.data[i])
  }
})