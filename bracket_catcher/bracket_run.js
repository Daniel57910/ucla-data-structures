const Bracket = require(`./bracket_catcher`)

let bracketCatcher = new Bracket()
bracketCatcher.init(`[[[]]{}()()]`)
bracketCatcher.solve()
