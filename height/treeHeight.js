/*Code*/

class Level {
  constructor(leaves) {
    this.leaves = leaves
  }
}

class Tree {
  constructor(data) {
    this.nodes = []
    this.nodes.push(new Level([data]))
  }

  insert(elements) {
    this.nodes.forEach((n, i) => {
      if (n.leaves === elements.pos || n.leaves.includes(elements.pos)) {
        this.insertIntoTree(elements, i + 1)
      }
    })
  }

  insertIntoTree(el, ni) {
    this.nodes[ni] ? 
    this.nodes[ni].leaves = this.nodes[ni].leaves.concat(el.values) : this.nodes.push(new Level(el.values))
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
    this.indexes.hasOwnProperty(index) ? this.indexes[index].push(value) : this.indexes[index] = [value]
  }

  build() {

    let queue = []
    queue = queue.concat(this.tree.nodes[0].leaves[0])

    while (queue.length) {
      let current = queue.shift()

      if (this.indexes.hasOwnProperty(current)) {
        let values = this.indexes[current]
        queue = queue.concat(values)
        this.tree.insert({pos: current, values: values})
      }

    }
  }

  height() {
    return this.tree.nodes.length
  }

}

/*Submission*/

var readline = require('readline')

process.stdin.setEncoding('utf8')

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


module.exports = HeightCalculator



