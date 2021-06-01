const fs = require('fs')

function OC(name, id) {
    this.name = name
    this.id = id
}

const OCList = [];

const My_OCs = [new OC('Rune', '5948')];
OCList.push({
    My_OCs
})

const startOC = JSON.stringify(OCList)
fs.writeFileSync('storage.json', startOC)

//Updating
const ListedOCs = require('../storage.json')

const New_OC = new OC('Luna', '5950')
ListedOCs.push(New_OC);

const newOcJSON = JSON.stringify(ListedOCs)
fs.writeFileSync('storage.json', newOcJSON)