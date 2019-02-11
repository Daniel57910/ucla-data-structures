const HeightCalculator = require(`./treeHeight`)


describe(`tree Height calculator`, () => {
  beforeEach(() => {
    indexes = [4, -1, 4, 1, 1]
    locations = [3, 4, 0, 2]
    heightCalculator = new HeightCalculator(indexes)
    heightCalculator.init()
  })
  test(`initialising the index calculator with an array of integers`, () => {
    for (let i = 0; i < indexes; i++) {
      expect(heightCalculator.indexes[i].value).toEqual(locations[i])
    }
    heightCalculator.build()
    let tree = heightCalculator.tree
    expect(tree.data).toEqual(1)
    expect(tree.left.data).toEqual(3)
    expect(tree.right.data).toEqual(4)
    expect(tree.right.left.data).toEqual(0)
    expect(heightCalculator.height(heightCalculator.tree)).toEqual(3)

  })
})


describe(`tree of 5 nodes w/ depth 4`, () => {
  beforeEach(() => {
    heightCalculator = new HeightCalculator([-1, 0, 4, 0, 3])
    locations = [1, 3, 4, 2]
    heightCalculator.init()
  })
  test(`that it builds on the right nodes`, () => {
    for (let i = 0; i < locations.length; i++) {
      expect(heightCalculator.indexes[i].value).toEqual(locations[i])
    }  
    heightCalculator.build()
    let tree = heightCalculator.tree, heights = []
    expect(tree.data).toEqual(0)
    expect(tree.left.data).toEqual(1)
    expect(tree.right.data).toEqual(3)
    expect(tree.right.left.data).toEqual(4)
    expect(tree.right.left.left.data).toEqual(2)
    expect(heightCalculator.height(heightCalculator.tree)).toEqual(4)
  })
})

describe(`tree of 10 nodes and depth 4`, () => {
  beforeEach(() => {
    heightCalculator = new HeightCalculator([9, 7, 5, 5, 2, 9, 9, 9, 2, -1])
    heightCalculator.init()
  })
  test(`bla`, () => {
    heightCalculator.build()
    console.log(heightCalculator.tree)
  })
})