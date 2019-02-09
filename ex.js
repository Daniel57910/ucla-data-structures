var readline = require('readline');

process.stdin.setEncoding('utf8');

var r1 = readline.createInterface({
  input: process.stdin,
  terminal: false
});

r1.on('line', (line) => {
  let a = line.toString().split(' ')
  r1.pause()
  console.log(`a is ${a}`)
  return a
})



