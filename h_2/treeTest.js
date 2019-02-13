const HeightCalculator = require(`./treeHeight`)
const assert = require('assert')

assert.equal(testHeight([4, -1, 4, 1, 1]), 3)
assert.equal(testHeight([-1, 0, 4, 0, 3]), 4)
assert.equal(testHeight([9, 7, 5, 5, 2, 9, 9, 9, 2, -1]), 4)



function testHeight(arr) {
  let heightCalculator = new HeightCalculator(arr)
  heightCalculator.init()
  heightCalculator.build()
  return heightCalculator.height()
}
