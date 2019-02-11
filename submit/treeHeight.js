//https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
//https://www.sitepoint.com/vs-code-extensions-javascript-developers/
//https://www.sitepoint.com/best-wireframing-tools/


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
    this.indexes = []
    this.tree
  }

  init() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] === -1 ? this.tree = new Tree(parseInt(i)): this.indexes.push(new TreePos(this.data[i], i))
    }
    this.indexes.sort((a, b) => a.pos - b.pos)
  }

  build() {
    for (let current of this.indexes) {
      this.tree.buildTree(current)
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
    this.value = value
    this.pos = pos
  }
}

var readline = require('readline');

process.stdin.setEncoding('utf8');

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


r1.on('line', (line) => {
  line = line.split(" ").map(int => parseInt(int))
  if (line.length > 1) {
    let heightCalculator = new HeightCalculator(line)
    heightCalculator.init()
    heightCalculator.build()
    console.log(heightCalculator.height())
    r1.close()
  }
})


