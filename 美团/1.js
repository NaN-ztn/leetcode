const fs = require('fs')
const lines = fs.readFileSync('./0.txt').toString().trim().split(/\r\n|\r|\n/)
function test(name) {
  return /^[A-Za-z]+[0-9]+[A-Za-z0-9]*$/.test(name) ? 'Accept' : 'Wrong'
}
console.log(lines)
for (let i = 1; i <= lines[0]; i++) {
  console.log(test(lines[i]))
}

