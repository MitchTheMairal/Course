const fs = require('fs')
const Entries_Storage = fs.readFileSync('Mining/Storage/entries.json', 'utf8')
const Entries = JSON.parse(Entries_Storage.toString())
const Simple = require('simplified-javascript')

const Check = Entries.find(authors => {
    return authors.author === 'Luna'
})
if(!Check) return console.log('You Have not Entered yet. Enter A Cave or A Mine first.')

const Minerals = require('../../Exports/Minerals')
const Found_Mineral = Simple.randomElement(Minerals)

const Name_Of_Mineral = Found_Mineral.mineral
const Price_Of_Mineral = Found_Mineral.price

console.log('You Swinged your Pickaxe towards a large wall of rocks.')

setTimeout(() => {
   console.log('You hit something, the strange sound you heard gave you a sign that you found something.')
}, 3000)

setTimeout(() => {
    console.log('You cleaned the dusts and particles from the wall, you examined what you found...')
}, 8000)

setTimeout(() => {
    console.log(`[ You Found: ]\n${Name_Of_Mineral}\n\n[ Price: ]\n${Price_Of_Mineral}`)
}, 13000)

// console.log(`[ You Found: ]\n${Name_Of_Mineral}\n\n[ Price: ]\n${Price_Of_Mineral}`)