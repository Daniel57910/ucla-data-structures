class BracketCatcher {

  constructor() {
    this.text 
    this.open = []
    this.functions = {"{": "}", "[": "]", "(": ")"}
  }

  init(text) {
    this.text = text
  }

  solve() {
    for (let i in this.text) {
      //If open bracket exists
      if (this.text[i] in this.functions) {
        this.open.push(new Bracket(this.text[i], i + 1))
      }
      //If closed bracket exists
      if (Object.values(this.functions).includes(this.text[i])) {
        let current = this.open.pop()
        if (this.functions[current.char] != this.text[i]) {
          return 'BAD'
        }
      }
    }
    if (!this.open.length) {
      return 'Success'
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