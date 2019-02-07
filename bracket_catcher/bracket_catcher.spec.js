const BracketCatcher = require(`./bracket_catcher`)

describe(`Executing simple bracket catcher`, () => {
  beforeEach(() => {
    bracketCatcher = new BracketCatcher()
  })
  test(`simple successful string`,() => {
    bracketCatcher.init(`{[[]]}`)
    expect(bracketCatcher.solve()).toEqual(`Success`)
  })
  test(`more complex successful scenario`, () => {
    bracketCatcher.init(`[ [ [ ] ] { } ( ) ( ) ]`)
    expect(bracketCatcher.solve()).toEqual('Success')
  })
})

describe(`Bracket catcher testing w/o special characters`, () => {
  beforeEach(() => {
    bracketCatcher = new BracketCatcher()
  })
  test(`identifying whether a string has matching brackets`, () => {
    bracketCatcher.init(`[[[]]{}()()]`)
    expect(bracketCatcher.solve()).toEqual('Success')
  })
  test(`nested functions that are successful`, () => {
    bracketCatcher.init(`[()]`)
    expect(bracketCatcher.solve()).toEqual('Success')
  })
  test(`horribly nested functions`, () => {
    bracketCatcher.init('{ ( { { { } } } [ ] ( ) { } [ ] ) }')
    expect(bracketCatcher.solve()).toEqual('Success')
  })
})

describe(`Bracket catcher testing w/ special characters`, () => {
   beforeEach(() => {
     bracketCatcher = new BracketCatcher()
   })
   test(`identifying whether a string has matching brackets`, () => {
     bracketCatcher.init(`function a = ([[[]]{}()()]) {return i + 1}`)
     expect(bracketCatcher.solve()).toEqual('Success')
   })
   test(`unrealistic edge case of garbage code but impossible functions`, () => {
    bracketCatcher.init('let a = new BracketCatcher()\n a.init()\n a.solve() a.return({{}}){{}}')
    expect(bracketCatcher.solve()).toEqual('Success')
   })
})