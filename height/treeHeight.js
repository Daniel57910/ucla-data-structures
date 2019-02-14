//next incorporate assert nodejs into code rather than testing framework

const DebugWriter = require('../debugWriter')
var pairFile = 'key_value.txt', logFile = 'logs.txt'

var debugWriter = new DebugWriter()
// debugWriter.dropFile(pairFile)
// debugWriter.dropFile(logFile)

class Level {
  constructor(level = 1, leaves) {
    this.level = level,
    this.leaves = leaves
  }
}

class Tree {
  constructor(data) {
    this.nodes = []
    this.nodes.push(new Level(1, [data]))
  }

  insert(elements) {
    // debugWriter.write(logFile, `inserting ${elements.pos} => ${elements.values}`)
    for (let leaf = 0; leaf < this.nodes.length; leaf++) {

      let currentLeaf = this.nodes[leaf].leaves
      // debugWriter.write(logFile, `current leaf = ${currentLeaf}`)
      if (currentLeaf === elements.pos || currentLeaf.includes(elements.pos)) {
        // debugWriter.write(logFile, `match between ${currentLeaf} + ${elements.pos}`)
        if (this.nodes[leaf + 1]) {
          this.nodes[leaf + 1].leaves = this.nodes[leaf + 1].leaves.concat(elements.values)
        }
        else this.nodes.push(new Level(this.nodes[leaf].level + 1, elements.values))
      }
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
    this.indexes.hasOwnProperty(index) ? this.indexes[index].push(value) : this.indexes[index] = [value]
  }

  build() {
    let queue = []
    queue = queue.concat(this.tree.nodes[0].leaves[0])
    while (queue.length) {
      let current = queue.shift()
      if (this.indexes.hasOwnProperty(current)) {
        queue = queue.concat(this.indexes[current]) 
        let values = this.indexes[current]
        this.tree.insert({pos: current, values: values})
      }
    }

    let builtTree = this.tree.nodes
    debugWriter.write(logFile, "next\n")
    for (let leaf of builtTree) debugWriter.write(logFile, `leaf => ${leaf.leaves} @ level => ${leaf.level}`)
    debugWriter.write(logFile, "\n")
  }

}

  


module.exports = HeightCalculator



