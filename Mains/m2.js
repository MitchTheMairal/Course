function Role(roleID, emoji, guildID) {
    this.roleID = roleID
    this.emoji = emoji
    this.guildID = guildID

    if(isNaN(roleID)) return new ReferenceError('Invalid Role ID')
    if(!isNaN(emoji)) return new ReferenceError('The Emoji should not be an ID')
    if(isNaN(guildID)) return new ReferenceError('Invalid Guild ID')
}

const R1 = new Role('1', '❤', '1')
// console.log(R1)

function numberLimit(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

console.log(
    numberLimit(5, 10)
)