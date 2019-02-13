//next incorporate assert nodejs into code rather than testing framework


class Tree {

  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
    this.height = 1
  }

  buildTree(arg) {

    if (!(this.left && this.right)) {
      !this.left ? this.left = new Tree(arg.value): this.right = new Tree(arg.value)
    } else {
      if (this.left)  this.left.buildTree(arg)
      if (this.right) this.right.buildTree(arg)
    }
  }


  heightRecur(height) {
    if (!(this.right && this.left)) {
      height.push(this.height)
    }
    if (this.left) {
      this.left.height = 1 + this.height
      this.left.getHeight(heights)
    }
    if (this.right) {
      this.right.height = 1 + this.height
      this.right.getHeight(heights)
    }

  }

}

class HeightCalculator {

  constructor(data) {
    this.data = data
    this.indexes = {}
    this.tree
  }

  init() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] === -1 ? this.tree = new Tree(i): this.addToBucket(this.data[i], i)
    }
  }

  addToBucket(index, value) {
    this.indexes.hasOwnProperty(index) ? this.validateAdd(index, value) : this.indexes[index] = [value]
  }

  validateAdd(index, value) {
    if (this.indexes[index].length < 2) this.indexes[index].push(value)
  }

  build() {
    let current = this.tree.data, queue = []
    for (let i = 0; i < 10; i++) {
      if (this.indexes.hasOwnProperty(current) && this.indexes[current].length) {
        queue.push(this.indexes[current].shift())
      }
      
    }
    console.log(queue)
    return queue

  }

  height() {
    let height = [], nodes = [this.tree], max = 0
    while (nodes.length) {
      let current = nodes.pop()
      if (current.left) {
        current.left.height = 1 + current.height
        nodes.push(current.left)
      }
      if (current.right) {
        current.right.height = 1 + current.height
        nodes.push(current.right)
      }
      if (max < current.height) max = current.height
    }
    return max
  }

}

class TreePos {
  constructor(pos, value) {
    this.data = value
    this.pos = pos
  }
}

module.exports = HeightCalculator


