const fs = require('fs')
const Entries_Storage = fs.readFileSync('Storage/entries.json', 'utf8')
const Entries = JSON.parse(Entries_Storage.toString())

const Check = Entries.find(authors => {
    return authors.author === 'a'
})
if(!Check) return console.log('You Have not Entered yet.')

const Author = Entries.filter(authors => { return authors.author !== 'a' });
fs.writeFileSync('Storage/entries.json', JSON.stringify(Author, null, 4));

//Saves Data
return setTimeout(() => {
    const Saving_Data = fs.readFileSync('Storage/entries.json', 'utf8')
    const Saved_Data = JSON.parse(Saving_Data.toString())
    fs.writeFileSync('Storage/entries.json', JSON.stringify(Saved_Data, null, 4))
}, 1000)