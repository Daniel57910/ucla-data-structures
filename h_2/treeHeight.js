//next incorporate assert nodejs into code rather than testing framework


class Tree {

  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
    this.height = 1
  }

  buildTree(arg) {

    if (arg.pos === this.data && !(this.left && this.right)) {
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
    let queue = []
    queue = queue.concat((this.indexes[this.tree.data].map(val => new TreePos(this.tree.data, val))))
    let current = queue.shift()

    while (current) {
      // console.log(`current going into build ->`)
      // console.log(current)
      // console.log(`before ->`)
      // console.log(queue)
      this.tree.buildTree(current)

      if (this.indexes.hasOwnProperty(current.value) && this.indexes[current.value].length) {
        queue = queue.concat((this.indexes[current.value].map(val => new TreePos(current.value, val))))
        // console.log(`after`)
        // console.log(queue)
      }
      current = queue.shift()
    }

  }
    
  height() {
    let nodes = [this.tree], max = 0
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
    this.pos = pos
    this.value = value
  }
}

module.exports = HeightCalculator


