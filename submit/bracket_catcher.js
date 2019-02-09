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

var readline = require('readline');

process.stdin.setEncoding('utf8');

var r1 = readline.createInterface({
  input: process.stdin,
  terminal: false
});

r1.on('line', (line) => {
  line = line.toString()
  let bracketCatcher = new BracketCatcher()
  bracketCatcher.init(line)
  console.log(bracketCatcher.solve())
  r1.close()
})


module.exports = BracketCatcher