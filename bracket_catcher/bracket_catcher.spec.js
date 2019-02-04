const BracketCatcher = require(`./bracket_catcher`)

describe(`Implementing the bracket catcher`, () => {
  beforeEach(() => {
    bracketCatcher = new BracketCatcher("{{}}")
  })
  it(`has a stack of objects upon initialization`, () => {
    expect(bracketCatcher.returnStack()).toEqual([])
  })

  it(`adds the opening parts of a function to the stack + the index`, () => {
    bracketCatcher.createStack()
    expect(bracketCatcher.returnStack()[0].char).toEqual("{")
    expect(bracketCatcher.returnStack()[0].ind).toEqual(1)

  })
})