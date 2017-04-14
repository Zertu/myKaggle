const main = require('./index')
, util = require('./util'),Papa = require('babyparse')

test('test testData',async () => {
    let result =  Papa.parse(await util.readFile('./data/test.csv'), {header: true})
    result.data.pop()  
  expect(main('./data')).toBe(result)
});