// Creating Data

const fs = require('fs')
const Main_Storage = fs.readFileSync('./YOUR_STORAGE_NAME.json', 'utf8')
const Storage = JSON.parse(Main_Storage.toString())

Storage.push(
    {
        name: 'Intense',
        nickname: 'Intense/Rune'
    }
)

//This part saves the created data and will not overwrite it.
const Saving_Data = JSON.stringify(Storage, null, 4)
fs.writeFileSync('./Storages/YOUR_STORAGE_NAME.json', Saving_Data)

// Reading Data

const fs = require('fs')
const Main_Storage = fs.readFileSync('./YOUR_STORAGE_NAME.json', 'utf8')
const Storage = JSON.parse(Main_Storage.toString())

console.log(Storage)

// Updating Data

const fs = require('fs')
const Main_Storage = fs.readFileSync('./YOUR_STORAGE_NAME.json', 'utf8')
const Storage = JSON.parse(Main_Storage.toString())

const Updated_Data = Storage.name = 'Rune'
const Saving_Data = JSON.stringify(Updated_Data, null, 4)
fs.writeFileSync('./Storages/YOUR_STORAGE_NAME.json', Saving_Data)

// Deleting Data

const fs = require('fs')
const Main_Storage = fs.readFileSync('./YOUR_STORAGE_NAME.json', 'utf8')
const Storage = JSON.parse(Main_Storage.toString())

const Data_To_Delete = Storage.filter(Names => { return Names.name !== 'Intense' })
fs.writeFileSync('./Storages/Welcome.json', JSON.stringify(Data_To_Delete, null, 4))

const Saving_Data = JSON.stringify(Storage, null, 4)
fs.writeFileSync('./Storages/YOUR_STORAGE_NAME.json', Saving_Data)

// Finding Data

const Found_Data = Storage.find(Guild => {
    return Guild.guildID = `${message.guild.id}`
})
if(!Found_Data) return console.log("No Data Found or Data doesn't exist.")
console.log(Found_Data)