const HeightCalculator = require(`./treeHeight`)
const assert = require('assert')
assert.equal(50, 50)

testInit([-1, 0, 4, 0, 3])


function testInit(arr) {
  let heightCalculator = new HeightCalculator(arr)
  heightCalculator.init()
  assert.deepEqual(heightCalculator.indexes[0], [1, 3])
  assert.deepEqual(heightCalculator.indexes[3], [4])
  heightCalculator.build()
  let tree = heightCalculator.tree
  assert.equal(tree.left.data, 1)
}
 