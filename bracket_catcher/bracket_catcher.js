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
    let open = "{[(", closed = "}])"
    for (let i = 0; i < this.text.length; i++) {
      //If open bracket exists
      if (open.includes(this.text[i])) {
        this.open.push(new Bracket(this.text[i], i + 1))
      }
      //If closed bracket exists
      if (closed.includes(this.text[i])) {
        if (!this.open.length) return i + 1
        
        let current = this.open.pop()
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