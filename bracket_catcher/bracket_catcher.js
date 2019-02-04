class BracketCatcher {

  constructor(text) {
    this.text = text
    this.stack = []
    this.functions = {"{": "}", "[": "]", "(": ")"}
  }

  returnStack() {
    return this.stack
  }

  createStack() {
    for (let i = 0; i < this.text.length; i++) {
      if (this.text[i] in this.functions) {
        this.stack.push(new Bracket(this.text[i], i + 1))
      }
    }
  }

}

class Bracket {
  constructor(char, int) {
    this.char = char
    this.ind = int
  }
}

module.exports = BracketCatcher