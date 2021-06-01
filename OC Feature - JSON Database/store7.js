//By Far the PROUDEST AND BEST progress (4) - Deleting Data

//Updated - 7:19pm at 4/9/21; April 9, 2021

const fs = require('fs')

const storage = fs.readFileSync('storage.json', 'utf8')
const Stringed = JSON.parse(storage.toString())

const Data_To_Update = JSON.stringify(Stringed, null, 4)
fs.writeFileSync('storage.json', Data_To_Update)

const foundOC = Stringed.find((ids) => {
    return ids.id === `5948`
})
if(!foundOC) return console.log('doesnt exist and this works')
if(foundOC.name !== "Airea") return console.log('not yours')

var users = Stringed.filter((foundOC) => { return foundOC.id !== "5948" });

fs.writeFileSync('storage.json', JSON.stringify(users, null, 4));

console.table(JSON.stringify(users, null, 4))

//Saves Data, this also means that it won't bring back the previous data after it got deleted
return setTimeout(() => {
    const Saving_Data = fs.readFileSync('storage.json', 'utf8')
    const Saved_Data = JSON.parse(Saving_Data.toString())
    fs.writeFileSync('storage.json', JSON.stringify(Saved_Data, null, 4))
}, 1000)

//By Far the PROUDEST AND BEST progress (4) - Deleting Data