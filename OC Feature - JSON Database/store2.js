const fs = require('fs')

//Updating
const ListedOCs = require('../storage.json')

ListedOCs.push({
    name: 'Airea',
    id: '5951'
});

const newOcJSON = JSON.stringify(ListedOCs)
fs.writeFileSync('storage.json', newOcJSON)