const HeightCalculator = require(`./treeHeight`)
const assert = require('assert')

testHeight([4, -1, 4, 1, 1])
testHeight([-1, 0, 4, 0, 3])
testHeight([9, 7, 5, 5, 2, 9, 9, 9, 2, -1])

function testHeight(arr) {
  let heightCalculator = new HeightCalculator(arr)
  heightCalculator.init()
  heightCalculator.build()
  return heightCalculator.tree.height
}
