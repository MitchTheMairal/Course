const fs = require('fs')

const Level_Roles_Storage = fs.readFileSync(
    'Level Roles or For Loops - JSON Database/Storage/Level-Roles.json', 'utf8'
)
const Level_Roles = JSON.parse(Level_Roles_Storage.toString())

const Guild_Check = Level_Roles.find(guild => {
    return guild.guildID === '804229607984463912'
})
if(!Guild_Check) return console.log('No Level Role(s) of the guild/server has been found.')

const Guild_Roles = Level_Roles.filter(guild => {
    return guild.guildID === '804229607984463912'
})
//For Loop Works for Checking
for (let i = 0; i < Guild_Roles.length; i++) {
    if(Guild_Roles[i].Level_To_Reach == Guild_Roles[i].Level_To_Reach) return console.log('Added Level 1')
}

// Level_Roles.push({
//     Level_To_Reach: 4
// })

const New_Level_Role = JSON.stringify(Level_Roles, null, 4)
fs.writeFileSync('Level Roles or For Loops - JSON Database/Storage/Level-Roles.json', New_Level_Role);
