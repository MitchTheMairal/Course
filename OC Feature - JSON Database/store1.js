const fs = require('fs');

// //Storing
const OC = {
    name: 'Rune',
    id: '5948'
}

const Arrayed = []; 
Arrayed.push(OC);

const ocJSON = JSON.stringify(Arrayed)
fs.writeFileSync('storage.json', ocJSON);