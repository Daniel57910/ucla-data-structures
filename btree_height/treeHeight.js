
class Tree {

  constructor(data) {
    this.left = null
    this.right = null
    this.data = data
    this.trees = []
  }

  buildTree(arg) {
    
    if (!this.left && arg.pos === this.data) {
      this.left = new Tree(arg.value)
    }

    else if (!this.right && arg.pos === this.data) {
      this.right = new Tree(arg.value)
    }
    else {
      if (this.left)  this.left.buildTree(arg)
      if (this.right) this.right.buildTree(arg)
    }
    

  }


  getHeight(height) {

    console.log(`current height = ${height}, data => ${this.data}`)
    if (this.data) {
      console.log(`current height = ${height}, data => ${this.data}`)

      height++
      if (this.left) {
        this.left.getHeight(height)
      }
      if (this.right) {
        this.right.getHeight(height)
      }
    }

    else {
      return height 
    }

  }

}

class HeightCalculator {

  constructor(data) {
    this.data = data
    this.indexes = []
    this.tree
  } 

  init() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] === -1 ? this.tree = new Tree(i) : this.indexes.push(new TreePos(this.data[i], i))
    }
    this.indexes.sort((a, b) => a.pos - b.pos)
  }

  build() {
    for (let current of this.indexes) {
      this.tree.buildTree(current)
    }
  }

  height() {
    return this.tree.getHeight()
  }

}

class TreePos {
  constructor(pos, value) {
    this.value = value
    this.pos = pos
  }
}


module.exports = HeightCalculator
