// Just checking if VS Code was bugging ~ 5/9/21; May 9, 2021

const fs = require('fs')

const Economy_Storage = fs.readFileSync('Economy.json', 'utf8')
const Economy = JSON.parse(Economy_Storage.toString())

const Author = Economy.find(Economy => {
    return Economy.Author_ID === '5948'
})
const Loss_Money = Author.Balance = Author.Balance - 5000

const Removing = JSON.stringify(Loss_Money, null, 4)
fs.writeFileSync('Economy.json', Removing)

const Removed = JSON.stringify(Economy, null, 4)
fs.writeFileSync('Economy.json', Removed)

console.log(Removed)