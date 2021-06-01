const fs = require('fs')
const Entries_Storage = fs.readFileSync('Storage/entries.json', 'utf8')
const Entries = JSON.parse(Entries_Storage.toString())

const Check = Entries.find(authors => {
    return authors.author === 'Luna'
})
if(!Check) {
    Entries.push({
        author: 'Luna'
    })
    
    const Entered = JSON.stringify(Entries, null, 4)
    fs.writeFileSync('Storage/entries.json', Entered)
    return console.log(Entered)
} else {
    return console.log('Preventing Duplicates Is A Success.')
}