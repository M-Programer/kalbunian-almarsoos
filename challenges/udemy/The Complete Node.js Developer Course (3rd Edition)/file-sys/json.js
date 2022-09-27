const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json').toString())
data.name = 'Mahmoud'
data.age = 13
fs.writeFileSync('./data.json', JSON.stringify(data))