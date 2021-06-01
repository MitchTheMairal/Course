//By Far the PROUDEST AND BEST progress (3) - Updating Data

const fs = require('fs')

const storage = fs.readFileSync('storage.json', 'utf8')
const Stringed = JSON.parse(storage.toString())

const foundName = Stringed.find((ids) => {
    return ids.id === '5948'
})

const Date_Of_Update = new Date().toLocaleDateString()
const Time_Of_Update = new Date().toLocaleTimeString()

const newID = foundName.name = 'Rune'

const startOC = JSON.stringify(newID, null, 4)
fs.writeFileSync('storage.json', startOC)

const newup = JSON.stringify(Stringed, null, 4)
fs.writeFileSync('storage.json', newup)

setTimeout(() => {
    console.table(newup)
}, 1000 * 2)

//Adding New Data rather than Updating Data - 4/10/21; April 10, 2021
const updatedTime = foundName.update = `On ${Date_Of_Update} At ${Time_Of_Update}`

const newData = JSON.stringify(updatedTime, null, 4)
fs.writeFileSync('storage.json', newData)

const updatedData = JSON.stringify(Stringed, null, 4)
fs.writeFileSync('storage.json', updatedData)

setTimeout(() => {
    console.table(updatedData)
}, 1000 * 2)

//Identifying The Owner and Updating a Data - 4/10/21; April 11, 2021
const Author = Stringed.find(authors => {
    return (authors.author === 'Intense/Rune' && authors.id === '5948')
})
const OCs_New_ID = Author.id = '5949'

const New_ID = JSON.stringify(OCs_New_ID, null, 4)
fs.writeFileSync('storage.json', New_ID)

const Updated_ID = JSON.stringify(Stringed, null, 4)
fs.writeFileSync('storage.json', Updated_ID)

setTimeout(() => {
    console.table(Updated_ID)
}, 1000 * 2)

//By Far the PROUDEST AND BEST progress (3) - Updating Data