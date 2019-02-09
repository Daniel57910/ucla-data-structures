class BracketCatcher {

  constructor() {
    this.text
    this.open = []
    this.functions = { "{": "}", "[": "]", "(": ")" }
  }

  init(text) {
    this.text = text
  }

  solve() {
    for (let i = 0; i < this.text.length; i++) {
      //If open bracket exists
      if (this.text[i] in this.functions) {
        this.open.push(new Bracket(this.text[i], i + 1))
      }
      //If closed bracket exists
      if (Object.values(this.functions).includes(this.text[i])) {
        let current = this.open.pop()
        //If closed bracket does not match the open bracket
        if (this.functions[current.char] != this.text[i]) {
          return i + 1
        }
      }
    }

    //if unmatched open bracket
    if (this.open.length) {
      return this.open.pop().ind
    }
    return 'Success'

  }

}
class Bracket {
  constructor(char, int) {
    this.char = char
    this.ind = int
  }
}

module.exports = BracketCatcher