const HeightCalculator = require(`./treeHeight`)
const assert = require('assert')
assert.equal(50, 50)


function testInit(arr) {
  let heightCalculator = new HeightCalculator(arr)
  heightCalculator.init()
  assert.deepEqual(heightCalculator.indexes[0], [1, 3])
  heightCalculator.build()
}

testInit([-1, 0, 4, 0, 3])