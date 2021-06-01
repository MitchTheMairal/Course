//By Far the best progress (2)

const fs = require('fs')
const ListedOCs = require('../storage.json')

const startOC = JSON.stringify(ListedOCs)
fs.writeFileSync('storage.json', startOC)

const storage = fs.readFileSync('storage.json', 'utf8')
const Stringed = JSON.parse(storage.toString())

const foundName = Stringed.find((ids) => {
    return ids.id === '5948'
})
console.log(foundName)