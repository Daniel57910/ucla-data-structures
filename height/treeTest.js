const HeightCalculator = require(`./treeHeight`)
const assert = require('assert')
const DebugWriter = require('../debugWriter')
const logFile = 'logs.txt'
const readLineSync = require(`read-each-line-sync`)
var debugWriter = new DebugWriter()
debugWriter.truncFile(logFile)
var treeArray = []
var results = [11, 3, 4]

readLineSync('treeEx.txt', 'utf8', (line) => {
  treeArray.push(line.split(" ").map(num => parseInt(num)))
})

for (let i in treeArray) {
  assert.equal(testHeight(treeArray[i]), results[i])
}



function testHeight(arr) {
  let heightCalculator = new HeightCalculator(arr)
  heightCalculator.init()
  heightCalculator.build()
  return heightCalculator.height()
}
