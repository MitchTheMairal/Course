//By Far the best progress

const fs = require('fs')
const ListedOCs = require('../storage.json')

/**
 * Creates a new character
 * @param {string} name 
 * @param {number} id 
 */
function OC(name, id) {
    this.name = name
    this.id = id
}

ListedOCs.push(
    {
        name: 'Airea',
        id: '5879',
    }
)

const startOC = JSON.stringify(ListedOCs, null, 4)
fs.writeFileSync('storage.json', startOC)

const storage = fs.readFileSync('storage.json', 'utf8')
const Stringed = JSON.parse(storage.toString())

const foundName = Stringed.find((names, ids) => {
    return (names.name === 'Mitch' || ids.id === '5948')
})
console.log(foundName.name)
console.log(foundName.id)

const NewOC = new OC('Mitch', '5880')
console.log(NewOC.name)
console.log(NewOC.id)